import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '服务与解决方案 | GoKart RFID',
    description: '提供专业的RFID技术定制开发、系统集成和技术支持服务',
};

export default function ServicesPage() {
    const services = [
        {
            icon: '🛠️',
            title: '定制开发服务',
            description: '根据您的业务需求，量身定制RFID计时系统',
            features: [
                '✓ 需求分析与方案设计',
                '✓ 界面定制（品牌色、logo、布局）',
                '✓ 功能扩展（多赛道、多场次、积分系统）',
                '✓ 数据库迁移与云端同步',
                '✓ 多语言支持',
                '✓ 移动端/Web端配套开发',
            ],
            price: '面议',
            cta: '获取报价',
        },
        {
            icon: '📦',
            title: '软件授权销售',
            description: '购买成熟的GoKart RFID系统完整授权',
            features: [
                '✓ 完整源代码授权',
                '✓ 技术文档与部署指南',
                '✓ 3个月免费技术支持',
                '✓ 终身版本更新',
                '✓ 商业使用许可',
                '✓ 培训与现场安装服务',
            ],
            price: '从 ¥12,800 起',
            cta: '立即购买',
        },
        {
            icon: '🔧',
            title: '系统集成服务',
            description: '将RFID技术集成到您的现有系统',
            features: [
                '✓ 多系统对接（ERP、CRM、大屏）',
                '✓ API接口开发',
                '✓ 数据库设计与优化',
                '✓ 实时数据推送',
                '✓ 云端部署（AWS/阿里云）',
                '✓ 性能优化与监控',
            ],
            price: '从 ¥8,000 起',
            cta: '咨询方案',
        },
        {
            icon: '🎓',
            title: '技术培训',
            description: 'RFID开发技术培训与技术咨询',
            features: [
                '✓ UHF RFID 技术原理',
                '✓ CF-815 SDK 二次开发',
                '✓ C# WinForms 实战',
                '✓ 防抖算法设计',
                '✓ 1对1技术指导',
                '✓ 提供完整学习资料',
            ],
            price: '¥3,800/天',
            cta: '预约培训',
        },
    ];

    const solutions = [
        {
            title: '卡丁车赛事计时',
            industry: '娱乐场所',
            description: '为卡丁车场提供全自动圈速计时，支持20辆车同时比赛，实时排行榜显示',
            icon: '🏎️',
            tags: ['已部署', '成熟方案'],
        },
        {
            title: '马拉松赛事管理',
            industry: '体育赛事',
            description: '大规模跑步赛事计时，支持数千人同时参赛，分段计时与成绩查询',
            icon: '🏃',
            tags: ['可定制'],
        },
        {
            title: '仓库物流管理',
            industry: '物流仓储',
            description: 'RFID货物追踪系统，实时库存盘点，进出库自动记录',
            icon: '📦',
            tags: ['可定制'],
        },
        {
            title: '智能停车场',
            industry: '物业管理',
            description: '车辆自动识别与计费，无感通行，云端数据管理',
            icon: '🅿️',
            tags: ['可定制'],
        },
        {
            title: '展会签到系统',
            industry: '活动管理',
            description: '参展人员快速签到，实时统计，数据导出与分析',
            icon: '🎫',
            tags: ['可定制'],
        },
        {
            title: '资产管理系统',
            industry: '企业管理',
            description: '固定资产RFID标签化管理，防盗追踪，盘点效率提升90%',
            icon: '💼',
            tags: ['可定制'],
        },
    ];

    const cases = [
        {
            client: '深圳某卡丁车场',
            project: 'GoKart RFID 计时系统',
            result: '替代人工计时，准确率100%，成本降低60%',
            duration: '2周交付',
        },
        {
            client: '广州体育局',
            project: '马拉松RFID计时系统',
            result: '同时支持5000名选手，0误差',
            duration: '1个月交付',
        },
        {
            client: '某物流公司',
            project: 'RFID仓储管理系统',
            result: '库存盘点时间从2天缩短到2小时',
            duration: '3个月交付',
        },
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">专业RFID技术服务</span>
                    </div>
                    <h1 className="mb-6">
                        <span className="gradient-text">为您量身定制RFID解决方案</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        从需求分析到系统开发，从部署培训到售后支持，
                        <br />
                        提供一站式RFID技术服务，助力您的业务数字化升级
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">核心服务</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card p-8 hover-lift">
                            <div className="text-6xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-6">{service.description}</p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                <div>
                                    <div className="text-sm text-muted-foreground">起步价格</div>
                                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                                </div>
                                <Link href="#contact" className="btn-primary">
                                    {service.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">行业解决方案</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div key={index} className="glass-card p-6 hover-lift group">
                            <div className="text-4xl mb-3">{solution.icon}</div>
                            <div className="text-xs text-primary font-semibold mb-2">{solution.industry}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {solution.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                            <div className="flex gap-2">
                                {solution.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="gradient-text">成功案例</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="glass-card p-6">
                            <div className="text-primary font-semibold mb-2">{caseItem.client}</div>
                            <h4 className="font-bold mb-3">{caseItem.project}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{caseItem.result}</p>
                            <div className="text-xs text-secondary">⏱️ {caseItem.duration}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-container">
                <div className="glass-card p-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="gradient-text">为什么选择我们</span>
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <h4 className="font-bold mb-2">快速交付</h4>
                            <p className="text-sm text-muted-foreground">平均2-4周完成开发部署</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <h4 className="font-bold mb-2">精准定制</h4>
                            <p className="text-sm text-muted-foreground">100%满足您的业务需求</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <h4 className="font-bold mb-2">性价比高</h4>
                            <p className="text-sm text-muted-foreground">比同行低30%-50%</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🛡️</div>
                            <h4 className="font-bold mb-2">售后保障</h4>
                            <p className="text-sm text-muted-foreground">1年免费维护，终身支持</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="section-container">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
                    <div className="relative z-10">
                        <h2 className="mb-4">准备开始您的项目？</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            立即联系我们，获取免费技术咨询和项目报价
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="mailto:kawada@gokart-rfid.com" className="btn-primary">
                                📧 发送邮件咨询
                            </a>
                            <a href="tel:+8613800138000" className="btn-secondary">
                                📱 电话咨询：138-0013-8000
                            </a>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            微信号：<span className="text-primary font-mono">kawada_rfid</span> |
                            工作时间：周一至周五 9:00-18:00
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
