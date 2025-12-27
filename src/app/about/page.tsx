import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '关于项目 | GoKart RFID',
    description: '了解 GoKart RFID 圈速系统的开发背景、技术架构和团队信息',
};

export default function AboutPage() {
    const timeline = [
        {
            date: '2024年12月27日',
            title: '项目重构',
            description: '对原有代码进行全面重构，建立清晰的架构和配置系统',
        },
        {
            date: '2024年12月25日',
            title: 'SDK 升级',
            description: '升级 CF-815 SDK 到最新版本，优化通信协议，提升读取稳定性和响应速度',
        },
        {
            date: '2024年10月',
            title: '功能完善',
            description: '添加音频反馈、SQLite存储和会话管理功能',
        },
        {
            date: '2024年8月',
            title: '防抖优化',
            description: '实现5秒防重复算法，解决高速场景下的误读问题',
        },
        {
            date: '2024年6月',
            title: '项目启动',
            description: '基于 CF-815 读卡器开发首个卡丁车圈速计数原型',
        },
    ];

    const techStack = [
        {
            category: '前端开发',
            items: ['C# WinForms', '.NET Framework 3.5', 'GDI+ 图形库'],
        },
        {
            category: '硬件通信',
            items: ['CF-815 SDK', 'USB-Serial (CP210x)', 'UHF RFID 协议'],
        },
        {
            category: '数据存储',
            items: ['SQLite 3', 'ADO.NET', 'Entity Framework'],
        },
        {
            category: '开发工具',
            items: ['Visual Studio 2022', 'Git', 'GitHub'],
        },
    ];

    const contributors = [
        {
            name: 'Kawada',
            role: '项目发起人 & 核心开发',
            avatar: '👨‍💻',
            description: '负责整体架构设计、硬件集成和核心算法开发',
        },
        {
            name: 'Antigravity AI',
            role: '技术顾问 & 代码重构',
            avatar: '🤖',
            description: '协助项目重构、文档编写和最佳实践指导',
        },
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">关于我们</span>
                    </div>
                    <h1 className="mb-6">
                        <span className="gradient-text">专业RFID技术服务提供商</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        我们专注于RFID技术的商业化应用与定制开发，
                        为各行业客户提供从咨询、开发、部署到维护的一站式解决方案。
                    </p>
                </div>
            </section>

            {/* Project Story */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="gradient-text">项目起源</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                在卡丁车赛事中，传统的手动计时方式容易出错且效率低下。
                                为了解决这个问题，我们基于 <span className="text-primary font-semibold">CF-815 UHF RFID 读卡器</span> 开发了这套自动化计时系统。
                            </p>
                            <p>
                                系统通过 RFID 技术自动识别经过终点线的卡丁车，
                                配合精心设计的 <span className="text-secondary font-semibold">5秒防抖算法</span>，
                                确保在高速场景下依然能够准确计数每一圈。
                            </p>
                            <p>
                                经过多次迭代和实际测试，系统已经能够稳定支持 20 辆卡丁车同时比赛，
                                并提供实时可视化、音频反馈和完整的数据记录功能。
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-primary mb-1">20</div>
                                    <div className="text-sm text-muted-foreground">支持卡丁车</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-secondary mb-1">8-10m</div>
                                    <div className="text-sm text-muted-foreground">读取距离</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-primary mb-1">5s</div>
                                    <div className="text-sm text-muted-foreground">防抖间隔</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-secondary mb-1">1080P</div>
                                    <div className="text-sm text-muted-foreground">UI优化</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">开发历程</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                    {index !== timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-border/50 mt-2" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <div className="text-sm text-primary font-semibold mb-1">{item.date}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">技术栈</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((stack, index) => (
                        <div key={index} className="glass-card p-6">
                            <h3 className="font-bold text-lg mb-4 text-primary">{stack.category}</h3>
                            <ul className="space-y-2">
                                {stack.items.map((item, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">团队成员</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {contributors.map((member, index) => (
                        <div key={index} className="glass-card p-8 text-center hover-lift">
                            <div className="text-6xl mb-4">{member.avatar}</div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <div className="text-primary font-semibold mb-4">{member.role}</div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open Source */}
            <section className="section-container">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
                    <div className="relative z-10">
                        <div className="text-6xl mb-6">📦</div>
                        <h2 className="mb-4">100% 开源项目</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            我们相信开源的力量。GoKart RFID 的所有代码都在 GitHub 上公开，
                            欢迎贡献代码、提出建议或报告问题。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/yuji4091/GoKartRFID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                ⭐ Star on GitHub
                            </a>
                            <Link href="/blog" className="btn-outline">
                                📖 阅读技术博客
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section-container">
                <div className="glass-card p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">联系我们</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">💬</div>
                            <h4 className="font-semibold mb-2">技术交流</h4>
                            <p className="text-sm text-muted-foreground">
                                通过 GitHub Issues 讨论技术问题
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl mb-2">📧</div>
                            <h4 className="font-semibold mb-2">商务合作</h4>
                            <p className="text-sm text-muted-foreground">
                                contact@gokart-rfid.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
