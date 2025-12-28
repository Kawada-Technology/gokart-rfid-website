import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { name: encodedName } = await params;
    const name = decodeURIComponent(encodedName);
    const t = await getTranslations('BlogCategory');

    return {
        title: `${name} - ${t('title')} | GoKart RFID Blog`,
        description: t('totalPosts', { count: 0 }).replace('0', ''), // Rough description, dynamic count difficult here without fetch
    };
}

// Define explicit types for reduce accumulator
type CategoryCount = Record<string, number>;
type PostWithCategory = {
    category: string;
};

export default async function CategoryPage({ params }: PageProps) {
    const { name: encodedName } = await params;
    const name = decodeURIComponent(encodedName);
    const t = await getTranslations('BlogCategory');
    const locale = await getLocale();

    // Fetch posts in this category
    const posts = await prisma.blogPost.findMany({
        where: {
            status: 'published',
            category: name,
        },
        orderBy: { publishedAt: 'desc' },
    });

    // Get all categories for sidebar
    const allPosts = await prisma.blogPost.findMany({
        where: { status: 'published' },
        select: { category: true },
    });

    const categoryCounts = allPosts.reduce((acc: CategoryCount, post: PostWithCategory) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {} as CategoryCount);

    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        count: count as number,
    }));

    if (posts.length === 0) {
        return (
            <div className="min-h-screen pt-16">
                <div className="section-container">
                    <div className="text-center py-20">
                        <h1 className="text-4xl font-bold gradient-text mb-4">
                            {t('title')}: {name}
                        </h1>
                        <p className="text-muted-foreground mb-8">
                            {t('empty')}
                        </p>
                        <Link href="/blog" className="btn-primary">
                            {t('backToBlog')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16">
            {/* Header */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t('backToBlog')}
                    </Link>
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">{t('title')}: {name}</span>
                    </div>
                    <h1 className="mb-4">
                        <span className="gradient-text">{name}</span>
                    </h1>
                    <p className="text-muted-foreground">
                        {t('totalPosts', { count: posts.length })}
                    </p>
                </div>
            </section>

            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {posts.map((post: any) => (
                            <div key={post.id} className="glass-card p-6 hover-lift group">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs text-primary font-semibold">{post.category}</span>
                                    <span className="text-xs text-muted-foreground">•</span>
                                    <span className="text-xs text-muted-foreground">
                                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString(locale)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {post.excerpt || post.title}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.slice(0, 3).map((tag: string, i: number) => (
                                            <span key={i} className="px-2 py-1 bg-muted/30 rounded text-xs">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 group/link"
                                    >
                                        {t('read')}
                                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* All Categories */}
                        <div className="glass-card p-6">
                            <h3 className="font-bold text-xl mb-4">{t('allCategories')}</h3>
                            <div className="space-y-2">
                                {categories.map((cat: { name: string; count: number }, i: number) => (
                                    <Link
                                        key={i}
                                        href={`/blog/category/${cat.name}`}
                                        className={`flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors ${cat.name === name ? 'bg-primary/10 border border-primary/30' : ''
                                            }`}
                                    >
                                        <span className={`font-medium ${cat.name === name ? 'text-primary' : ''}`}>
                                            {cat.name}
                                        </span>
                                        <span className="text-sm text-muted-foreground">({cat.count})</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
