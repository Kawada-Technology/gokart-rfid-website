'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const router = useRouter();
    const { data: session } = useSession();
    const [stats, setStats] = useState({
        posts: 0,
        views: 0,
        drafts: 0,
    });

    useEffect(() => {
        // Fetch stats from API
        fetch('/api/blog')
            .then(res => res.json())
            .then(data => {
                const published = data.filter((p: any) => p.status === 'published');
                const drafts = data.filter((p: any) => p.status === 'draft');
                const totalViews = published.reduce((sum: number, p: any) => sum + (p.viewsCount || 0), 0);

                setStats({
                    posts: published.length,
                    views: totalViews,
                    drafts: drafts.length,
                });
            })
            .catch(err => console.error('Failed to fetch stats:', err));
    }, []);

    // 通用 CMS 快速操作
    const quickActions = [
        {
            title: '博客管理',
            desc: '发布和管理文章',
            icon: <FileTextIcon className="w-8 h-8 text-foreground" />,
            href: '/admin/blog/posts',
            color: 'primary',
            badge: stats.posts > 0 ? `${stats.posts} 篇` : null,
        },
        {
            title: 'SEO 配置',
            desc: '优化搜索引擎设置',
            icon: <SearchIcon className="w-8 h-8 text-foreground" />,
            href: '/admin/seo',
            color: 'secondary',
        },
        {
            title: '新建文章',
            desc: '快速发布新内容',
            icon: <EditIcon className="w-8 h-8 text-foreground" />,
            href: '/admin/blog/new',
            color: 'accent',
        },
        {
            title: '查看前台',
            desc: '访问网站前台',
            icon: <GlobeIcon className="w-8 h-8 text-foreground" />,
            href: '/',
            color: 'primary',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Top Navigation */}
            <nav className="bg-card/50 backdrop-blur-xl border-b border-border/50 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/admin/dashboard" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <RocketIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-lg gradient-text">CMS 管理后台</span>
                        </Link>

                        {/* Right Menu */}
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                返回前台
                            </Link>
                            <button
                                onClick={() => signOut({ callbackUrl: '/admin/login' })}
                                className="px-4 py-2 bg-destructive/10 hover:bg-destructive/20 text-destructive transition-colors rounded-lg text-sm font-medium"
                            >
                                退出登录
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="gradient-text">欢迎回来，{session?.user?.name || '管理员'}！</span>
                    </h1>
                    <p className="text-muted-foreground">登录账号：{session?.user?.email}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="glass-card p-6 hover-lift">
                        <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl"><FileTextIcon className="w-8 h-8 text-primary" /></div>
                            <div className="text-xs font-medium px-2 py-1 rounded bg-primary/20 text-primary">
                                已发布
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stats.posts}</div>
                        <div className="text-sm text-muted-foreground">博客文章</div>
                    </div>

                    <div className="glass-card p-6 hover-lift">
                        <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl"><EyeIcon className="w-10 h-10 text-primary" /></div>
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stats.views.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">总浏览量</div>
                    </div>

                    <div className="glass-card p-6 hover-lift">
                        <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl"><DocumentIcon className="w-8 h-8 text-primary" /></div>
                            {stats.drafts > 0 && (
                                <div className="text-xs font-medium px-2 py-1 rounded bg-yellow-500/20 text-yellow-500">
                                    待处理
                                </div>
                            )}
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{stats.drafts}</div>
                        <div className="text-sm text-muted-foreground">草稿</div>
                    </div>

                    <div className="glass-card p-6 hover-lift">
                        <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl"><GlobeIcon className="w-8 h-8 text-primary" /></div>
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">在线</div>
                        <div className="text-sm text-muted-foreground">系统状态</div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-card p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6">快速操作</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                href={action.href}
                                className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover:scale-105 group relative"
                            >
                                <div className="mb-2 flex justify-center text-primary group-hover:scale-110 transition-transform">{action.icon}</div>
                                <div className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {action.title}
                                </div>
                                <div className="text-xs text-muted-foreground">{action.desc}</div>
                                {action.badge && (
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium">
                                        {action.badge}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Analytics Preview (Placeholder) */}
                <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold mb-4">网站分析概览</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">访客地区 Top 3</div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full" />
                                    <span className="font-medium">中国大陆</span>
                                    <span className="text-sm text-muted-foreground ml-auto">65%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    <span className="font-medium">香港</span>
                                    <span className="text-sm text-muted-foreground ml-auto">20%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="font-medium">美国</span>
                                    <span className="text-sm text-muted-foreground ml-auto">15%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">设备类型</div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 font-medium">
                                    <DesktopIcon className="w-4 h-4 text-primary" />
                                    <span>桌面</span>
                                </div>
                                <span className="text-sm text-muted-foreground ml-auto">55%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 font-medium">
                                    <MobileIcon className="w-4 h-4 text-primary" />
                                    <span>移动</span>
                                </div>
                                <span className="text-sm text-muted-foreground ml-auto">40%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 font-medium">
                                    <TabletIcon className="w-4 h-4 text-primary" />
                                    <span>平板</span>
                                </div>
                                <span className="text-sm text-muted-foreground ml-auto">5%</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1">浏览器</div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Chrome</span>
                                <span className="text-sm text-muted-foreground ml-auto">70%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Safari</span>
                                <span className="text-sm text-muted-foreground ml-auto">20%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Firefox</span>
                                <span className="text-sm text-muted-foreground ml-auto">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                    <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
                        <LightBulbIcon className="w-4 h-4 text-yellow-500" />
                        提示：集成 Google Analytics 或 Plausible 可获取真实数据
                    </div>
                </div>
            </div>
        </div>
    );
}


// Icons
const RocketIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L20 4m-6 6l4-4m-6 6l.5 2.5L13 20l-1.5-3.5-3.5-1.5L10 13l-2.5.5m6-6L4 20" />
    </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const EditIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const DesktopIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const MobileIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const TabletIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

const LightBulbIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);
