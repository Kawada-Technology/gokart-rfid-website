import Link from 'next/link';
import type { Metadata } from 'next';
import prisma from '@/lib/prisma';
import { getTranslations, getLocale } from 'next-intl/server';
import { getSeoMetadata } from '@/lib/seo';

// Force dynamic rendering - don't try to pre-render at build time
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('BlogPage.metadata');
    return getSeoMetadata('blog', {
        title: t('title'),
        description: t('description'),
    });
}

// Define explicit types for Prisma result shapes since we are selecting specific fields
type BlogPostSummary = {
    category: string;
    tags: string[];
};

export default async function BlogPage() {
    const t = await getTranslations('BlogPage');
    const locale = await getLocale();

    // Fetch published posts from database (filtered by locale)
    const posts = await prisma.blogPost.findMany({
        where: { status: 'published', locale },
        orderBy: { publishedAt: 'desc' },
        take: 10, // Limit to 10 posts
    });

    // Get category counts (filtered by locale)
    const allPosts = await prisma.blogPost.findMany({
        where: { status: 'published', locale },
        select: { category: true, tags: true },
    });

    const categoryCounts = allPosts.reduce((acc: Record<string, number>, post: BlogPostSummary) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
        name,
        count,
    }));

    // Extract all tags
    const allTags = new Set<string>();
    allPosts.forEach((post: BlogPostSummary) => {
        if (Array.isArray(post.tags)) {
            post.tags.forEach((tag: string) => allTags.add(tag));
        }
    });

    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);

    // If no posts, show placeholder
    if (posts.length === 0) {
        return (
            <div className="min-h-screen pt-16 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold gradient-text mb-4">
                        {t('emptyState.title')}
                    </h1>
                    <p className="text-muted-foreground">
                        {t('emptyState.message')}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text">{t('hero.title')}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t('hero.description')}
                    </p>
                </div>
            </section>

            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Featured Post */}
                        {featuredPost && (
                            <div className="glass-card p-8 hover-lift group">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                                        ⭐ {t('featured.label')}
                                    </span>
                                    <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                    {featuredPost.excerpt || featuredPost.title}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredPost.tags.map((tag: string, i: number) => (
                                        <span key={i} className="px-3 py-1 bg-muted/50 rounded-lg text-xs font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>📅 {new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString()}</span>
                                        <span>👁️ {featuredPost.viewsCount} {t('featured.views')}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${featuredPost.slug}`}
                                        className="btn-primary text-sm py-2 px-6"
                                    >
                                        {t('featured.readMore')}
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Posts List */}
                        <div className="space-y-6">
                            {regularPosts.map((post: any) => (
                                <div key={post.id} className="glass-card p-6 hover-lift group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-primary font-semibold">{post.category}</span>
                                        <span className="text-xs text-muted-foreground">•</span>
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
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
                                            {t('postList.read')}
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Categories */}
                        {categories.length > 0 && (
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-xl mb-4">{t('sidebar.categories')}</h3>
                                <div className="space-y-2">
                                    {categories.map((cat: { name: string; count: number }, i: number) => (
                                        <Link
                                            key={i}
                                            href={`/blog/category/${cat.name}`}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                        >
                                            <span className="font-medium group-hover:text-primary transition-colors">
                                                {cat.name}
                                            </span>
                                            <span className="text-sm text-muted-foreground">({cat.count})</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tags Cloud */}
                        {allTags.size > 0 && (
                            <div className="glass-card p-6">
                                <h3 className="font-bold text-xl mb-4">{t('sidebar.tags')}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Array.from(allTags).slice(0, 10).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-muted/50 rounded-lg text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
