'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewBlogPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        category: 'RFID技术',
        tags: '',
        status: 'draft',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
                }),
            });

            if (res.ok) {
                alert('文章创建成功！');
                router.push('/admin/blog/posts');
            } else {
                const error = await res.json();
                alert(`创建失败：${error.error}`);
            }
        } catch (err) {
            alert('创建失败');
        } finally {
            setLoading(false);
        }
    };

    // Auto-generate slug from title
    const handleTitleChange = (title: string) => {
        setFormData({
            ...formData,
            title,
            slug: formData.slug || title.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/--+/g, '-')
                .trim(),
        });
    };

    return (
        <div className="min-h-screen bg-background py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/admin/blog/posts" className="text-primary hover:text-primary/80 mb-4 inline-block">
                        ← 返回文章列表
                    </Link>
                    <h1 className="text-3xl font-bold gradient-text">新建文章</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">标题 *</label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="输入文章标题"
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
                            placeholder="url-friendly-slug"
                        />
                        <div className="text-xs text-muted-foreground mt-2">
                            将显示为：/blog/{formData.slug || 'your-slug'}
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
                            placeholder="# 标题&#10;&#10;正文内容...&#10;&#10;支持 Markdown 语法"
                        />
                        <div className="text-xs text-muted-foreground mt-2">
                            💡 支持 Markdown：# 标题、**粗体**、`code`、[链接](url) 等
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="glass-card p-6">
                        <label className="block text-sm font-medium mb-2">摘要</label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                            placeholder="简短描述（可选，用于列表展示）"
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
                                placeholder="RFID技术"
                            />
                        </div>
                        <div className="glass-card p-6">
                            <label className="block text-sm font-medium mb-2">标签 (逗号分隔)</label>
                            <input
                                type="text"
                                value={formData.tags}
                                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="RFID, C#, 硬件"
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
                            disabled={loading}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                            {loading ? '创建中...' : '创建文章'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
