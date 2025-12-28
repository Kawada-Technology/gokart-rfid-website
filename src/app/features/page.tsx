import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getSeoMetadata } from '@/lib/seo';
import { RFIDSystemIllustration } from '@/components/Icons';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('FeaturesPage.metadata');
    return getSeoMetadata('features', {
        title: t('title'),
        description: t('description'),
    });
}

// Reuse SVG Icons
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

export default async function FeaturesPage() {
    const t = await getTranslations('FeaturesPage');

    const features = [
        {
            key: 'autoLap',
            icon: ZapIcon,
        },
        {
            key: 'visualDashboard',
            icon: ChartIcon,
        },
        {
            key: 'audioFeedback',
            icon: SpeakerIcon,
        },
        {
            key: 'realtimeLog',
            icon: DocumentIcon,
        },
        {
            key: 'sessionControl',
            icon: GamepadIcon,
        },
        {
            key: 'sqliteStorage',
            icon: DatabaseIcon,
        }
    ];

    const techSpecs = [
        'hardware', 'frequency', 'range', 'capacity', 'interval', 'interface', 'baudRate', 'database', 'framework', 'resolution'
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="section-container">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                        <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="gradient-text">{t('hero.title')}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t('hero.description')}
                    </p>
                    {/* RFID System Illustration */}
                    <div className="mt-10">
                        <RFIDSystemIllustration className="w-full max-w-2xl mx-auto h-28 text-primary" />
                    </div>
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
                            <h3 className="text-2xl font-bold mb-3">{t(`features.items.${feature.key}.title`)}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{t(`features.items.${feature.key}.description`)}</p>
                            <ul className="space-y-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span>{t(`features.items.${feature.key}.details.${i}`)}</span>
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
                        <span className="gradient-text">{t('techSpecs.title')}</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {techSpecs.map((spec, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                                <span className="font-semibold text-muted-foreground">{t(`techSpecs.items.${spec}.label`)}</span>
                                <span className="font-mono text-primary">{t(`techSpecs.items.${spec}.value`)}</span>
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
                        <h2 className="mb-4">{t('cta.title')}</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {t('cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/Kawada-Technology/gokart-rfid-website/releases"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                📦 {t('cta.download')}
                            </a>
                            <Link href="/about" className="btn-outline">
                                📖 {t('cta.more')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
