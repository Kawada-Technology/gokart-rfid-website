'use client';

import Link from 'next/link';

export default function AdminSEOPage() {
    return (
        <div className="min-h-screen bg-background">
            <nav className="bg-card/50 backdrop-blur-xl border-b border-border/50 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-xl">🏎️</span>
                            </div>
                            <span className="font-bold text-lg gradient-text">GoKart 管理后台</span>
                        </Link>
                        <Link href="/admin/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                            ← 返回仪表板
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="glass-card p-12 text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h1 className="text-3xl font-bold mb-4">
                        <span className="gradient-text">SEO 配置管理</span>
                    </h1>
                    <p className="text-muted-foreground mb-6">优化网站的搜索引擎排名和元数据</p>
                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm">
                        🚧 功能开发中...
                    </div>
                </div>
            </div>
        </div>
    );
}
