import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '技术博客 | GoKart RFID',
    description: 'GoKart RFID 项目开发日志、技术教程和 RFID 相关知识分享',
};

export default function BlogPage() {
    // 模拟博客文章数据（后续会从数据库读取）
    const featuredPost = {
        id: 1,
        title: '从零开始：CF-815 RFID 读卡器开发指南',
        excerpt: '详细介绍如何使用 CF-815 四端口 UHF RFID 读卡器进行二次开发，包括 SDK 集成、通信协议、防抖算法等核心技术。',
        category: 'RFID技术',
        date: '2025-01-15',
        readTime: '15 分钟',
        image: '🏎️',
        tags: ['C#', 'RFID', 'CF-815', '硬件开发'],
    };

    const posts = [
        {
            id: 2,
            title: 'C# WinForms 实战：卡丁车圈速系统设计',
            excerpt: '分享如何使用 WinForms 构建高性能的实时数据展示界面，包含色彩编码、动态刷新和音频反馈实现。',
            category: 'C#开发',
            date: '2025-01-10',
            readTime: '12 分钟',
            tags: ['WinForms', 'UI设计', '实时系统'],
        },
        {
            id: 3,
            title: 'SQLite 数据库在嵌入式应用中的最佳实践',
            excerpt: '探讨轻量级数据库 SQLite 在本地应用中的使用技巧，包括表设计、索引优化和数据迁移。',
            category: '数据库',
            date: '2025-01-05',
            readTime: '10 分钟',
            tags: ['SQLite', '数据库设计', '性能优化'],
        },
        {
            id: 4,
            title: '如何设计稳定的 RFID 防抖算法',
            excerpt: 'RFID 高速识别场景下的防重复挑战与解决方案，5秒防抖算法的设计思路和代码实现。',
            category: '算法',
            date: '2024-12-28',
            readTime: '8 分钟',
            tags: ['算法', 'RFID', '防抖'],
        },
        {
            id: 5,
            title: 'GoKart RFID 项目重构之路',
            excerpt: '从混乱代码到清晰架构，记录 GoKart RFID 项目的完整重构过程和经验总结。',
            category: '项目日志',
            date: '2024-12-20',
            readTime: '20 分钟',
            tags: ['重构', '架构设计', '最佳实践'],
        },
        {
            id: 6,
            title: '硬件调试踩坑记录：CP210x 驱动问题',
            excerpt: 'USB-Serial 转换芯片 CP210x 在 Windows 环境下的常见问题和解决方案汇总。',
            category: '硬件',
            date: '2024-12-15',
            readTime: '6 分钟',
            tags: ['硬件', '驱动', '调试'],
        },
    ];

    const categories = [
        { name: 'RFID技术', count: 8 },
        { name: 'C#开发', count: 12 },
        { name: '数据库', count: 5 },
        { name: '算法', count: 6 },
        { name: '项目日志', count: 15 },
        { name: '硬件', count: 7 },
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">技术分享 & 开发日志</span>
                    </div>
                    <h1 className="mb-6">
                        <span className="gradient-text">GoKart RFID 技术博客</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        分享 RFID 开发经验、C# 编程技巧和项目实战心得
                    </p>
                </div>
            </section>

            <div className="section-container">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Featured Post */}
                        <div className="glass-card p-8 hover-lift group">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                                    ⭐ 精选文章
                                </span>
                                <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {featuredPost.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-muted/50 rounded-lg text-xs font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>📅 {featuredPost.date}</span>
                                    <span>⏱️ {featuredPost.readTime}</span>
                                </div>
                                <Link
                                    href={`/blog/${featuredPost.id}`}
                                    className="btn-primary text-sm py-2 px-6"
                                >
                                    阅读全文 →
                                </Link>
                            </div>
                        </div>

                        {/* Posts List */}
                        <div className="space-y-6">
                            {posts.map((post) => (
                                <div key={post.id} className="glass-card p-6 hover-lift group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-primary font-semibold">{post.category}</span>
                                        <span className="text-xs text-muted-foreground">•</span>
                                        <span className="text-xs text-muted-foreground">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-1 bg-muted/30 rounded text-xs">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={`/blog/${post.id}`}
                                            className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 group/link"
                                        >
                                            阅读
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 pt-4">
                            <button className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50" disabled>
                                上一页
                            </button>
                            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                                1
                            </button>
                            <button className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                                2
                            </button>
                            <button className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                                3
                            </button>
                            <button className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                                下一页
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Categories */}
                        <div className="glass-card p-6">
                            <h3 className="font-bold text-xl mb-4">分类</h3>
                            <div className="space-y-2">
                                {categories.map((cat, i) => (
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

                        {/* Newsletter */}
                        <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                            <h3 className="font-bold text-xl mb-2">📬 订阅更新</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                获取最新的技术文章和项目动态
                            </p>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3 text-sm"
                            />
                            <button className="w-full btn-primary text-sm">
                                订阅
                            </button>
                        </div>

                        {/* Tags Cloud */}
                        <div className="glass-card p-6">
                            <h3 className="font-bold text-xl mb-4">热门标签</h3>
                            <div className="flex flex-wrap gap-2">
                                {['C#', 'RFID', 'WinForms', 'SQLite', '算法', '硬件', '重构', '性能优化', 'CF-815', '实时系统'].map((tag, i) => (
                                    <Link
                                        key={i}
                                        href={`/blog/tag/${tag}`}
                                        className="px-3 py-1 bg-muted/50 hover:bg-primary/20 hover:text-primary rounded-lg text-sm transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
