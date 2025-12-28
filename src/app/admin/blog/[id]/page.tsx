'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function EditBlogPostPage({ params }: PageProps) {
    const router = useRouter();
    const [id, setId] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        category: '',
        tags: '',
        status: 'draft',
    });

    useEffect(() => {
        params.then(p => {
            setId(p.id);
            // Fetch post data
            fetch(`/api/blog/${p.id}`)
                .then(res => res.json())
                .then(post => {
                    setFormData({
                        title: post.title,
                        slug: post.slug,
                        content: post.content,
                        excerpt: post.excerpt || '',
                        category: post.category,
                        tags: post.tags.join(', '),
                        status: post.status,
                    });
                    setLoading(false);
                })
                .catch(() => {
                    alert('加载失败');
                    router.push('/admin/blog/posts');
                });
        });
    }, [params, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
                }),
            });

            if (res.ok) {
                alert('保存成功！');
                router.push('/admin/blog/posts');
            } else {
                alert('保存失败');
            }
        } catch (err) {
            alert('保存失败');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-muted-foreground">加载中...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/admin/blog/posts" className="text-primary hover:text-primary/80 mb-4 inline-block">
                        ← 返回文章列表
                    </Link>
                    <h1 className="text-3xl font-bold gradient-text">编辑文章</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">标题 *</label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Slug */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">URL Slug *</label>
                        <input
                            type="text"
                            required
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                        />
                        <div className="text-xs text-muted-foreground mt-2">
                            将显示为：/blog/{formData.slug}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">内容 (Markdown) *</label>
                        <textarea
                            required
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                            rows={20}
                        />
                    </div>

                    {/* Excerpt */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">摘要</label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                        />
                    </div>

                    {/* Category & Tags */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6">
                            <label className="block text-sm font-medium mb-2">分类 *</label>
                            <input
                                type="text"
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="glass-card p-6">
                            <label className="block text-sm font-medium mb-2">标签 (逗号分隔)</label>
                            <input
                                type="text"
                                value={formData.tags}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Status */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">发布状态 *</label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="draft">草稿</option>
                            <option value="published">发布</option>
                        </select>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-4">
                        <Link
                            href="/admin/blog/posts"
                            className="px-6 py-2 bg-muted/50 hover:bg-muted rounded-lg font-medium transition-colors"
                        >
                            取消
                        </Link>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {saving ? '保存中...' : '保存更改'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
