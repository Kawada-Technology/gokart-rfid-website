'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const router = useRouter();

    // 模拟数据（后续会从数据库读取）
    const stats = [
        { label: '总圈速记录', value: '1,234', icon: '🏁', change: '+12%', trend: 'up' },
        { label: '活跃卡丁车', value: '18', icon: '🏎️', change: '+2', trend: 'up' },
        { label: '博客文章', value: '24', icon: '📝', change: '+3', trend: 'up' },
        { label: '本月访问', value: '5.2K', icon: '👁️', change: '+18%', trend: 'up' },
    ];

    const recentLaps = [
        { kart: 'AA01', lap: 15, time: '00:45.234', timestamp: '2分钟前' },
        { kart: 'AA03', lap: 19, time: '00:48.891', timestamp: '5分钟前' },
        { kart: 'AA05', lap: 8, time: '00:47.156', timestamp: '8分钟前' },
        { kart: 'AA02', lap: 12, time: '00:46.523', timestamp: '12分钟前' },
    ];

    const quickActions = [
        { title: '卡丁车管理', desc: '管理 AA01-AA20 卡丁车', icon: '🏎️', href: '/admin/karts', color: 'primary' },
        { title: '圈速数据', desc: '查看和管理圈速记录', icon: '📊', href: '/admin/laps', color: 'secondary' },
        { title: '博客管理', desc: '创建和编辑文章', icon: '📝', href: '/admin/blog/posts', color: 'accent' },
        { title: 'SEO 配置', desc: '优化搜索引擎设置', icon: '🔍', href: '/admin/seo', color: 'primary' },
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
                                <span className="text-xl">🏎️</span>
                            </div>
                            <span className="font-bold text-lg gradient-text">GoKart 管理后台</span>
                        </Link>

                        {/* Right Menu */}
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                返回前台
                            </Link>
                            <button
                                onClick={() => router.push('/admin/login')}
                                className="px-4 py-2 bg-muted/50 hover:bg-muted transition-colors rounded-lg text-sm font-medium"
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
                        <span className="gradient-text">欢迎回来！</span>
                    </h1>
                    <p className="text-muted-foreground">这是你的 GoKart RFID 系统管理中心</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card p-6 hover-lift">
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-3xl">{stat.icon}</div>
                                <div className={`text-xs font-medium px-2 py-1 rounded ${stat.trend === 'up' ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'
                                    }`}>
                                    {stat.change}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    {/* Recent Laps */}
                    <div className="glass-card p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">最近圈速</h2>
                            <Link href="/admin/laps" className="text-primary hover:text-primary/80 text-sm font-medium">
                                查看全部 →
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {recentLaps.map((lap, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                            <span className="text-primary font-bold text-sm">{lap.kart}</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground">Lap {lap.lap}</div>
                                            <div className="text-xs text-muted-foreground">{lap.timestamp}</div>
                                        </div>
                                    </div>
                                    <div className="text-lg font-mono font-bold text-secondary">{lap.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card p-6">
                        <h2 className="text-2xl font-bold mb-6">快速操作</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {quickActions.map((action, index) => (
                                <Link
                                    key={index}
                                    href={action.href}
                                    className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-all hover:scale-105 group"
                                >
                                    <div className="text-3xl mb-2">{action.icon}</div>
                                    <div className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {action.title}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{action.desc}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* System Info */}
                <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold mb-4">系统信息</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">数据库状态</div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span className="font-medium text-primary">正常运行</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">RFID 读卡器</div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span className="font-medium text-primary">已连接 (COM7)</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">系统版本</div>
                            <div className="font-medium text-foreground">v1.0.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
