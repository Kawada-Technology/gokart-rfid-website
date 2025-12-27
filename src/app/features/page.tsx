import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '功能特性 | GoKart RFID Lap Counter',
    description: '了解 GoKart RFID 圈速系统的所有功能特性：自动计数、实时可视化、音频反馈、数据存储等。',
};

// 复用首页的 SVG 图标
const ZapIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const SpeakerIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0-8.485a5 5 0 00-1.414 1.414M13 12a1 1 0 11-2 0 1 1 0 012 0zm-3 4a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const GamepadIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

export default function FeaturesPage() {
    const features = [
        {
            icon: ZapIcon,
            title: '自动圈速计数',
            description: '基于 UHF RFID 技术的高精度识别，配合 5 秒防重复保护算法，确保每一圈都准确无误。',
            details: [
                '✓ 高精度 UHF RFID 识别（860-960MHz）',
                '✓ 5秒防抖算法防止重复计数',
                '✓ 支持高速移动标签（最高 120km/h）',
                '✓ 读取距离 8-10米',
            ]
        },
        {
            icon: ChartIcon,
            title: '可视化仪表板',
            description: '1080P 全屏优化界面，色彩编码状态显示（运行中/最后一圈/完成/未激活），一目了然。',
            details: [
                '✓ 1080P 全屏优化布局',
                '✓ 实时状态色彩编码（绿/黄/青/红）',
                '✓ 20个卡丁车同时显示',
                '✓ 动态刷新，无延迟',
            ]
        },
        {
            icon: SpeakerIcon,
            title: '音频反馈',
            description: '每圈独特的提示音，完成全程后播放胜利音效序列，提升比赛体验感。',
            details: [
                '✓ 每圈通过独特提示音',
                '✓ 最后一圈警告音',
                '✓ 完成全程胜利音效',
                '✓ 可自定义音频文件',
            ]
        },
        {
            icon: DocumentIcon,
            title: '实时日志',
            description: '色彩编码的事件日志系统，清晰区分原始数据、圈数记录和错误信息。',
            details: [
                '✓ 实时事件记录',
                '✓ 色彩分类（数据/圈数/错误）',
                '✓ 时间戳精确到毫秒',
                '✓ 日志导出功能',
            ]
        },
        {
            icon: GamepadIcon,
            title: '会话控制',
            description: '支持单独为每辆卡丁车手动启动和重置会话，灵活应对各种比赛场景。',
            details: [
                '✓ 单独启动/重置功能',
                '✓ 批量操作支持',
                '✓ 会话状态保护',
                '✓ 历史记录追溯',
            ]
        },
        {
            icon: DatabaseIcon,
            title: 'SQLite 存储',
            description: '本地数据库存储圈速时间，支持历史数据查询和统计分析。',
            details: [
                '✓ 轻量级 SQLite 数据库',
                '✓ 完整的历史记录',
                '✓ 数据导出（CSV/Excel）',
                '✓ 统计分析支持',
            ]
        }
    ];

    const techSpecs = [
        { label: '硬件', value: 'CF-815 四端口 UHF RFID 读卡器' },
        { label: '频段', value: '860-960MHz（可调）' },
        { label: '读取距离', value: '8-10米（高增益天线）' },
        { label: '支持卡丁车', value: '20辆（AA01-AA20）' },
        { label: '防重复间隔', value: '5秒（可配置）' },
        { label: '通信接口', value: 'USB-Serial（CP210x）' },
        { label: '波特率', value: '115200 bps' },
        { label: '数据库', value: 'SQLite 3' },
        { label: '开发框架', value: 'C# WinForms + .NET 3.5' },
        { label: 'UI分辨率', value: '1080P 优化' },
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">完整功能特性</span>
                    </div>
                    <h1 className="mb-6">
                        <span className="gradient-text">强大的功能，专业的体验</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        GoKart RFID 圈速系统为卡丁车赛事提供全方位的自动化计时解决方案，
                        从硬件识别到数据分析，每个环节都经过精心设计。
                    </p>
                </div>
            </section>

            {/* Detailed Features */}
            <section className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-8 hover-lift group">
                            <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                            <ul className="space-y-2">
                                {feature.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="section-container">
                <div className="glass-card p-8 lg:p-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="gradient-text">技术规格</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {techSpecs.map((spec, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                                <span className="font-semibold text-muted-foreground">{spec.label}</span>
                                <span className="font-mono text-primary">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
                    <div className="relative z-10">
                        <h2 className="mb-4">准备好体验了吗？</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            下载 GoKart RFID 系统，为你的赛事带来专业级的计时体验
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/yuji4091/GoKartRFID/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                📦 下载系统
                            </a>
                            <Link href="/about" className="btn-outline">
                                📖 了解更多
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
