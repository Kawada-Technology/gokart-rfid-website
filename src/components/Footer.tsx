import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: '功能特性', href: '/features' },
            { label: '圈速排行榜', href: '/leaderboard' },
            { label: '技术博客', href: '/blog' },
            { label: '关于项目', href: '/about' },
        ],
        resources: [
            { label: 'GitHub 仓库', href: 'https://github.com/yuji4091/GoKartRFID', external: true },
            { label: '下载最新版', href: 'https://github.com/yuji4091/GoKartRFID/releases', external: true },
            { label: '技术文档', href: '/blog/category/documentation' },
            { label: '开发日志', href: '/blog/category/development' },
        ],
        tech: [
            { label: 'C# WinForms', href: '/blog/tag/csharp' },
            { label: 'RFID 技术', href: '/blog/tag/rfid' },
            { label: 'CF-815 SDK', href: '/blog/tag/cf815' },
            { label: 'SQLite', href: '/blog/tag/sqlite' },
        ],
    };

    return (
        <footer className="border-t border-border/50 bg-card/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🏎️</span>
                            </div>
                            <span className="font-bold text-xl gradient-text">GoKart RFID</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            高精度卡丁车圈速计数系统
                            <br />
                            基于 CF-815 UHF RFID 技术
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/yuji4091/GoKartRFID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">产品</h3>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">资源</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                                        >
                                            {link.label}
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">技术栈</h3>
                        <ul className="space-y-2">
                            {footerLinks.tech.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} GoKart RFID. Developed by{' '}
                        <span className="text-primary font-medium">Kawada & Antigravity AI</span>
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/admin/login" className="text-muted-foreground hover:text-primary transition-colors">
                            管理后台
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
