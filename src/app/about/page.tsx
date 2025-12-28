import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getSeoMetadata } from '@/lib/seo';
import { GoKartIllustration, RFIDSystemIllustration, LinkedInIcon, SendIcon } from '@/components/Icons';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('AboutPage.metadata');
    return getSeoMetadata('about', {
        title: t('title'),
        description: t('description'),
    });
}

export default async function AboutPage() {
    const t = await getTranslations('AboutPage');

    const timelineItems = [0, 1, 2, 3, 4]; // Assuming 5 items
    const techCategories = ['frontend', 'hardware', 'database', 'tools'];
    const teamMembers = ['kawada', 'antigravity'];

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
                    {/* GoKart Illustration */}
                    <div className="mt-10">
                        <GoKartIllustration className="w-full max-w-md mx-auto h-24 text-primary" />
                    </div>
                </div>
            </section>

            {/* Project Story */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            <span className="gradient-text">{t('projectStory.title')}</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                {t.rich('projectStory.content.p1', {
                                    primary: (chunks) => <span className="text-primary font-semibold">{chunks}</span>
                                })}
                            </p>
                            <p>
                                {t.rich('projectStory.content.p2', {
                                    secondary: (chunks) => <span className="text-secondary font-semibold">{chunks}</span>
                                })}
                            </p>
                            <p>
                                {t('projectStory.content.p3')}
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-primary mb-1">{t('projectStory.stats.karts.value')}</div>
                                    <div className="text-sm text-muted-foreground">{t('projectStory.stats.karts.label')}</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-secondary mb-1">{t('projectStory.stats.range.value')}</div>
                                    <div className="text-sm text-muted-foreground">{t('projectStory.stats.range.label')}</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-primary mb-1">{t('projectStory.stats.interval.value')}</div>
                                    <div className="text-sm text-muted-foreground">{t('projectStory.stats.interval.label')}</div>
                                </div>
                                <div className="text-center p-4 bg-muted/30 rounded-xl">
                                    <div className="text-4xl font-bold text-secondary mb-1">{t('projectStory.stats.ui.value')}</div>
                                    <div className="text-sm text-muted-foreground">{t('projectStory.stats.ui.label')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('timeline.title')}</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {timelineItems.map((_, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                    {index !== timelineItems.length - 1 && (
                                        <div className="w-0.5 h-full bg-border/50 mt-2" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <div className="text-sm text-primary font-semibold mb-1">{t(`timeline.items.${index}.date`)}</div>
                                    <h3 className="text-xl font-bold mb-2">{t(`timeline.items.${index}.title`)}</h3>
                                    <p className="text-muted-foreground">{t(`timeline.items.${index}.description`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('techStack.title')}</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techCategories.map((category, index) => (
                        <div key={index} className="glass-card p-6">
                            <h3 className="font-bold text-lg mb-4 text-primary">{t(`techStack.categories.${category}.title`)}</h3>
                            <ul className="space-y-2">
                                {[0, 1, 2].map((i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">▸</span>
                                        <span>{t(`techStack.categories.${category}.items.${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('team.title')}</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="glass-card p-8 text-center hover-lift flex flex-col items-center">
                            <div className="mb-4 text-primary">
                                {member === 'kawada' ? <UserIcon className="w-16 h-16" /> : <RobotIcon className="w-16 h-16" />}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{t(`team.members.${member}.name`)}</h3>
                            <div className="text-primary font-semibold mb-4">{t(`team.members.${member}.role`)}</div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t(`team.members.${member}.description`)}
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
                        <div className="flex justify-center mb-6">
                            <PackageIcon className="w-16 h-16 text-primary" />
                        </div>
                        <h2 className="mb-4">{t('openSource.title')}</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {t('openSource.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/yuji4091/GoKartRFID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center justify-center gap-2"
                            >
                                <StarIcon className="w-5 h-5" />
                                {t('openSource.star')}
                            </a>
                            <Link href="/blog" className="btn-outline flex items-center justify-center gap-2">
                                <BookIcon className="w-5 h-5" />
                                {t('openSource.blog')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="section-container">
                <div className="glass-card p-8 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">
                                <span className="gradient-text">{t('contact.title')}</span>
                            </h3>
                            <p className="text-muted-foreground">
                                {t('contact.description')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MailIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{t('contact.business.title')}</div>
                                        <div className="font-medium">admin@kawadaai.studio</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ChatIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">{t('contact.tech.title')}</div>
                                        <div className="font-medium">GitHub Issues</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <LinkedInIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">LinkedIn</div>
                                        <a href="https://www.linkedin.com/in/kawadaitsolution/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">@kawadaitsolution</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                            </div>
                            <button className="w-full btn-primary flex items-center justify-center gap-2">
                                <SendIcon className="w-5 h-5" />
                                {t('contact.form.submit')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Icon Components
const UserIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const RobotIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PackageIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const ChatIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
