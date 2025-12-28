'use client';

import Link from 'next/link';

export default function AdminLapsPage() {
    return (
        <div className="min-h-screen bg-background">
            <nav className="bg-card/50 backdrop-blur-xl border-b border-border/50 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <FlagIcon className="w-6 h-6 text-white" />
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
                    <div className="flex justify-center mb-4">
                        <ChartBarIcon className="w-16 h-16 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">
                        <span className="gradient-text">圈速数据管理</span>
                    </h1>
                    <p className="text-muted-foreground mb-6">查看、导出和分析所有圈速记录</p>
                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm flex items-center gap-2 justify-center">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        功能开发中...
                    </div>
                </div>
            </div>
        </div>
    );
}

// Icons
const ChartBarIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const FlagIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-8a2 2 0 01-2-1.85V19a2 2 0 012 2h2.51l.31-7H21a1 1 0 00.97-.76l2-7a1 1 0 00-.97-1.24H6.38l-.18-.87a1 1 0 00-.98-.8h-3a1 1 0 00-1 1v17a2 2 0 001 2h2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11h16.29l-1.43 5H5.82L4 11z" />
    </svg>
);
