'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    status: string;
    viewsCount: number;
    publishedAt: string | null;
    createdAt: string;
}

export default function BlogPostsPage() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

    useEffect(() => {
        fetch('/api/blog')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('确定要删除这篇文章吗？')) return;

        try {
            const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setPosts(posts.filter(p => p.id !== id));
                alert('删除成功！');
            } else {
                alert('删除失败');
            }
        } catch (err) {
            alert('删除失败');
        }
    };

    const filteredPosts = posts.filter(p => {
        if (filter === 'all') return true;
        return p.status === filter;
    });

    return (
        <div className="min-h-screen bg-background py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                        <div>
                            <h1 className="text-3xl font-bold gradient-text mb-2">博客文章管理</h1>
                            <p className="text-muted-foreground">共 {posts.length} 篇文章</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/admin/dashboard"
                                className="px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                            >
                                返回后台
                            </Link>
                            <Link href="/admin/blog/new" className="btn-primary whitespace-nowrap">
                                ✏️ 新建文章
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 hover:bg-muted'
                            }`}
                    >
                        全部 ({posts.length})
                    </button>
                    <button
                        onClick={() => setFilter('published')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'published' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 hover:bg-muted'
                            }`}
                    >
                        已发布 ({posts.filter(p => p.status === 'published').length})
                    </button>
                    <button
                        onClick={() => setFilter('draft')}
                        className={`px-4 py-2 rounded-lg transition-colors ${filter === 'draft' ? 'bg-primary text-primary-foreground' : 'bg-muted/50 hover:bg-muted'
                            }`}
                    >
                        草稿 ({posts.filter(p => p.status === 'draft').length})
                    </button>
                </div>

                {/* Posts List */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="text-muted-foreground">加载中...</div>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="glass-card p-12 text-center">
                        <div className="text-4xl mb-4">📝</div>
                        <h3 className="text-xl font-bold mb-2">暂无文章</h3>
                        <p className="text-muted-foreground mb-6">
                            {filter === 'draft' ? '暂无草稿' : '开始创建您的第一篇文章吧'}
                        </p>
                        <Link href="/admin/blog/new" className="btn-primary">
                            新建文章
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredPosts.map(post => (
                            <div key={post.id} className="glass-card p-6 hover-lift">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold">{post.title}</h3>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${post.status === 'published'
                                                ? 'bg-primary/20 text-primary'
                                                : 'bg-yellow-500/20 text-yellow-500'
                                                }`}>
                                                {post.status === 'published' ? '已发布' : '草稿'}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                            <span>📂 {post.category}</span>
                                            <span>👁️ {post.viewsCount} 浏览</span>
                                            <span>🔗 /{post.slug}</span>
                                            <span>
                                                📅 {new Date(post.publishedAt || post.createdAt).toLocaleDateString('zh-CN')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={`/admin/blog/${post.id}`}
                                            className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-colors"
                                        >
                                            编辑
                                        </Link>
                                        {post.status === 'published' && (
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                target="_blank"
                                                className="px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium transition-colors"
                                            >
                                                预览
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="px-4 py-2 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg text-sm font-medium transition-colors"
                                        >
                                            删除
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
