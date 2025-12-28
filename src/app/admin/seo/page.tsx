'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SeoConfig {
    id: string;
    page: string;
    title: string;
    description: string;
    keywords: string | null;
}

// 网站页面列表
const SITE_PAGES = [
    { id: 'home', name: '首页', path: '/' },
    { id: 'features', name: '功能详情', path: '/features' },
    { id: 'services', name: '服务方案', path: '/services' },
    { id: 'about', name: '关于我们', path: '/about' },
    { id: 'blog', name: '博客列表', path: '/blog' },
    { id: 'contact', name: '联系我们', path: '/contact' },
];

export default function SeoConfigPage() {
    const [configs, setConfigs] = useState<SeoConfig[]>([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        page: '',
        title: '',
        description: '',
        keywords: '',
    });

    useEffect(() => {
        fetchConfigs();
    }, []);

    const fetchConfigs = () => {
        fetch('/api/seo')
            .then(res => res.json())
            .then(data => {
                setConfigs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = editing ? `/api/seo/${editing}` : '/api/seo';
            const method = editing ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert(editing ? '更新成功！' : '创建成功！');
                setFormData({ page: '', title: '', description: '', keywords: '' });
                setEditing(null);
                fetchConfigs();
            } else {
                alert('操作失败');
            }
        } catch (err) {
            alert('操作失败');
        }
    };

    const handleEdit = (config: SeoConfig) => {
        setEditing(config.page);
        setFormData({
            page: config.page,
            title: config.title,
            description: config.description,
            keywords: config.keywords || '',
        });
    };

    const handleQuickSelect = (pageId: string, pageName: string) => {
        const existingConfig = configs.find(c => c.page === pageId);

        if (existingConfig) {
            handleEdit(existingConfig);
        } else {
            setEditing(null);
            setFormData({
                page: pageId,
                title: `${pageName} | GoKart RFID`,
                description: '',
                keywords: '',
            });
        }
    };

    const handleDelete = async (page: string) => {
        if (!confirm(`确定要删除 ${page} 页面的 SEO 配置吗？`)) return;

        try {
            const res = await fetch(`/api/seo/${page}`, { method: 'DELETE' });
            if (res.ok) {
                fetchConfigs();
                alert('删除成功！');
            }
        } catch (err) {
            alert('删除失败');
        }
    };

    const getPageStatus = (pageId: string) => {
        return configs.find(c => c.page === pageId);
    };

    return (
        <div className="min-h-screen bg-background py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/admin/dashboard" className="text-primary hover:text-primary/80 mb-4 inline-block">
                        ← 返回后台
                    </Link>
                    <h1 className="text-3xl font-bold gradient-text mb-2">SEO 配置管理</h1>
                    <p className="text-muted-foreground">为每个页面自定义搜索引擎优化信息</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-1">
                        <div className="glass-card p-6 sticky top-8">
                            <h2 className="text-xl font-bold mb-4">
                                {editing ? '编辑配置' : '新建配置'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">页面标识 *</label>
                                    <input
                                        type="text"
                                        required
                                        disabled={!!editing}
                                        value={formData.page}
                                        onChange={(e) => setFormData({ ...formData, page: e.target.value })}
                                        className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                                        placeholder="home, about, contact..."
                                    />
                                    <div className="text-xs text-muted-foreground mt-1">
                                        唯一标识符（如：home, about）
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">页面标题 *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="GoKart RFID | 首页"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">页面描述 *</label>
                                    <textarea
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        rows={3}
                                        placeholder="简短描述页面内容..."
                                    />
                                    <div className="text-xs text-muted-foreground mt-1">
                                        建议 150-160 字符
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">关键词</label>
                                    <input
                                        type="text"
                                        value={formData.keywords}
                                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                        className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="RFID, 卡丁车, 圈速"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    {editing && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditing(null);
                                                setFormData({ page: '', title: '', description: '', keywords: '' });
                                            }}
                                            className="flex-1 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg font-medium transition-colors"
                                        >
                                            取消
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="flex-1 btn-primary"
                                    >
                                        {editing ? '更新' : '创建'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Quick Select - Site Pages */}
                        <div className="glass-card p-6">
                            <h2 className="text-xl font-bold mb-4">快速选择页面</h2>
                            <div className="grid md:grid-cols-2 gap-3">
                                {SITE_PAGES.map(page => {
                                    const status = getPageStatus(page.id);
                                    return (
                                        <button
                                            key={page.id}
                                            onClick={() => handleQuickSelect(page.id, page.name)}
                                            className={`p-4 rounded-lg text-left transition-all hover:scale-105 ${status
                                                    ? 'bg-primary/10 border-2 border-primary/30'
                                                    : 'bg-muted/30 border-2 border-border/30 hover:border-primary/50'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold">{page.name}</span>
                                                {status ? (
                                                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                                                        已配置
                                                    </span>
                                                ) : (
                                                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                                        未配置
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-muted-foreground font-mono">
                                                {page.path}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Configured Pages List */}
                        <div className="glass-card p-6">
                            <h2 className="text-xl font-bold mb-4">已配置页面</h2>
                            {loading ? (
                                <div className="text-center py-8 text-muted-foreground">加载中...</div>
                            ) : configs.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="text-4xl mb-4">🔍</div>
                                    <h3 className="text-lg font-bold mb-2">暂无 SEO 配置</h3>
                                    <p className="text-muted-foreground text-sm">
                                        点击上方页面卡片快速配置
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {configs.map(config => (
                                        <div key={config.id} className="p-4 bg-muted/30 rounded-lg">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="px-3 py-1 bg-primary/20 text-primary rounded text-sm font-medium">
                                                            {config.page}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold mb-1">{config.title}</h3>
                                                    <p className="text-muted-foreground text-sm mb-2">{config.description}</p>
                                                    {config.keywords && (
                                                        <div className="text-xs text-muted-foreground">
                                                            🏷️ {config.keywords}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={() => handleEdit(config)}
                                                        className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded text-sm font-medium transition-colors"
                                                    >
                                                        编辑
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(config.page)}
                                                        className="px-3 py-1 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded text-sm font-medium transition-colors"
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
                </div>
            </div>
        </div>
    );
}
