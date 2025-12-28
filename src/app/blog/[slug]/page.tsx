import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github-dark.css';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for published posts (optional, can be removed for ISR)
export async function generateStaticParams() {
    const posts = await prisma.blogPost.findMany({
        where: { status: 'published' },
        select: { slug: true },
    });
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const t = await getTranslations('BlogPost');
    const locale = await getLocale();

    const post = await prisma.blogPost.findFirst({
        where: { slug, locale },
    });

    if (!post) {
        return { title: t('notFound') };
    }

    return {
        title: `${post.title} | GoKart RFID Blog`,
        description: post.excerpt || post.title,
        keywords: post.tags.join(', '),
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const t = await getTranslations('BlogPost');
    const locale = await getLocale();

    const post = await prisma.blogPost.findFirst({
        where: { slug, locale },
    });

    if (!post || post.status !== 'published') {
        notFound();
    }

    // Fetch related posts (same locale, different slug, limit 5)
    const relatedPosts = await prisma.blogPost.findMany({
        where: {
            locale,
            status: 'published',
            slug: { not: slug },
        },
        select: { slug: true, title: true, category: true },
        orderBy: { publishedAt: 'desc' },
        take: 5,
    });

    // Increment view count (fire-and-forget)
    prisma.blogPost.update({
        where: { id: post.id },
        data: { viewsCount: { increment: 1 } },
    }).catch(() => { }); // silent fail

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t('backToList')}
                </Link>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-3">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                                    {post.category}
                                </span>
                                <span>{new Date(post.createdAt).toLocaleDateString(locale)}</span>
                                <span>·</span>
                                <span>{post.viewsCount} {t('views')}</span>
                            </div>
                            <h1 className="text-5xl font-bold gradient-text mb-4">{post.title}</h1>
                            {post.excerpt && (
                                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
                            )}
                        </header>

                        {/* Cover Image */}
                        {post.coverImage && (
                            <div className="mb-12 rounded-2xl overflow-hidden">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-auto"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-invert prose-lg max-w-none mb-12">
                            <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeSlug]}>
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-8 border-t border-border">
                                <span className="text-muted-foreground">{t('tags')}</span>
                                {post.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-muted/50 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </article>

                    {/* Sidebar - Table of Contents + Related Posts */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            {/* Table of Contents */}
                            <div>
                                <h3 className="font-bold text-lg mb-4">{t('toc')}</h3>
                                <TableOfContents content={post.content} />
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="glass-card p-4">
                                    <h3 className="font-bold text-lg mb-4">{t('relatedPosts')}</h3>
                                    <div className="space-y-3">
                                        {relatedPosts.map((related) => (
                                            <Link
                                                key={related.slug}
                                                href={`/blog/${related.slug}`}
                                                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                            >
                                                <div className="text-xs text-primary mb-1">{related.category}</div>
                                                <div className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                                    {related.title}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
