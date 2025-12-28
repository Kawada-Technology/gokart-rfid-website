'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const currentYear = 2026;

    const footerLinks = {
        product: [
            { label: t('links.features'), href: '/features' },
            { label: t('links.blog'), href: '/blog' },
            { label: t('links.about'), href: '/about' },
        ],
        resources: [
            { label: t('links.github'), href: 'https://github.com/Kawada-Technology/gokart-rfid-website', external: true },
            { label: t('links.download'), href: 'https://github.com/Kawada-Technology/gokart-rfid-website/releases', external: true },
        ],
        tech: [
            { label: 'C# WinForms', href: '/blog/tag/csharp' },
            { label: 'RFID', href: '/blog/tag/rfid' },
            { label: 'SQLite', href: '/blog/tag/sqlite' },
        ],
    };

    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Compact Layout - All in one row on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Column 1: Brand + Product Links */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="font-bold gradient-text">Kawada GoKart RFID</span>
                        </div>
                        <p className="text-muted-foreground text-xs mb-3">
                            {t('tagline')}
                        </p>
                        <div className="flex gap-2 text-xs">
                            {footerLinks.product.map((link, i) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                    {i < footerLinks.product.length - 1 && <span className="ml-2">•</span>}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Resources */}
                    <div>
                        <h3 className="font-semibold text-sm mb-3">{t('resourcesTitle')}</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
                            {footerLinks.resources.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                                >
                                    {link.label}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-3">
                            <a
                                href="https://github.com/Kawada-Technology/gokart-rfid-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center"
                                aria-label="GitHub"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Tech Stack */}
                    <div>
                        <h3 className="font-semibold text-sm mb-3">{t('techStackTitle')}</h3>
                        <div className="flex gap-2 text-xs">
                            {footerLinks.tech.map((link, i) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                    {i < footerLinks.tech.length - 1 && <span className="ml-2">•</span>}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Compact */}
                <div className="pt-4 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
                    <p>
                        © {currentYear} Kawada GoKart RFID · <span className="text-primary">Kawada & Antigravity AI</span>
                    </p>
                    <Link href="/admin/login" className="hover:text-primary transition-colors">
                        {t('adminPanel')}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
