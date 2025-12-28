
import Link from 'next/link';
import { getSeoMetadata } from '@/lib/seo';
import {
    CodeIcon, PackageIcon, SettingsIcon, AcademicCapIcon,
    FlagIcon, ActivityIcon, TruckIcon, ParkingIcon, TicketIcon, BriefcaseIcon,
    ZapIcon, TargetIcon, CurrencyIcon, ShieldIcon, ClockIcon, RFIDSystemIllustration,
    EmailIcon, LinkedInIcon
} from '@/components/Icons';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('ServicesPage.metadata');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ServicesPage() {
    const t = await getTranslations('ServicesPage');

    // Helper to Get Array from Translations
    // Note: Since plain arrays are not fully type-safe in all setups,
    // we map known keys primarily. However, for features lists we can map indices if keys are not named.
    // Given the structure in JSON, 'services.items' has keys 'custom', 'license', 'integration', 'training'.

    const serviceKeys = ['custom', 'license', 'integration', 'training'];
    const services = serviceKeys.map(key => ({
        icon: key === 'custom' ? CodeIcon : key === 'license' ? PackageIcon : key === 'integration' ? SettingsIcon : AcademicCapIcon,
        title: t(`services.items.${key}.title`),
        description: t(`services.items.${key}.description`),
        features: [0, 1, 2, 3, 4, 5].map(i => t(`services.items.${key}.features.${i}`)),
        price: t(`services.items.${key}.price`),
        priceLabel: t(`services.items.${key}.price_label`),
        cta: t(`services.items.${key}.cta`)
    }));

    const solutionKeys = ['karting', 'marathon', 'logistics', 'parking', 'exhibition', 'asset'];
    const solutionIcons = [FlagIcon, ActivityIcon, TruckIcon, ParkingIcon, TicketIcon, BriefcaseIcon];
    const solutions = solutionKeys.map((key, index) => ({
        icon: solutionIcons[index],
        title: t(`solutions.items.${key}.title`),
        industry: t(`solutions.items.${key}.industry`),
        description: t(`solutions.items.${key}.description`),
        tags: [0, 1].map(i => {
            try { return t(`solutions.items.${key}.tags.${i}`) } catch (e) { return "" }
        }).filter(tag => tag !== "solutions.items." + key + ".tags.1" && tag !== "") // Simple error handling for variable length
    }));

    const caseKeys = [0, 1, 2];
    const cases = caseKeys.map(i => ({
        client: t(`cases.items.${i}.client`),
        project: t(`cases.items.${i}.project`),
        result: t(`cases.items.${i}.result`),
        duration: t(`cases.items.${i}.duration`)
    }));

    const whyKeys = ['fast', 'custom', 'cost', 'support'];
    const whyIcons = [ZapIcon, TargetIcon, CurrencyIcon, ShieldIcon];
    const whyItems = whyKeys.map((key, index) => ({
        icon: whyIcons[index],
        title: t(`why.items.${key}.title`),
        description: t(`why.items.${key}.description`)
    }));

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                        <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="gradient-text">{t('hero.title')}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: t.raw('hero.description') }}
                    />
                    {/* RFID System Illustration */}
                    <div className="mt-6">
                        <RFIDSystemIllustration className="w-full max-w-3xl mx-auto h-24 text-primary" />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('services.title')}</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="glass-card p-6 hover-lift group flex flex-col h-full">
                                <div className="text-4xl mb-3">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                                <ul className="space-y-1 mb-4 flex-1">
                                    {service.features.slice(0, 4).map((feature, i) => (
                                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                            <span className="text-primary mt-0.5">▸</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-right mt-auto">
                                    <Link href="#contact" className="btn-primary text-sm py-2 px-4 inline-block">
                                        {service.cta}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Solutions */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('solutions.title')}</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <div key={index} className="glass-card p-6 hover-lift group">
                                <div className="text-4xl mb-3">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
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
                        );
                    })}
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-container">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="gradient-text">{t('cases.title')}</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="glass-card p-6">
                            <div className="text-primary font-semibold mb-2">{caseItem.client}</div>
                            <h4 className="font-bold mb-3">{caseItem.project}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{caseItem.result}</p>
                            <div className="text-xs text-secondary flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {caseItem.duration}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-container">
                <div className="glass-card p-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="gradient-text">{t('why.title')}</span>
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {whyItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-3">
                                        <Icon className="w-10 h-10 text-primary mx-auto" />
                                    </div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="section-container">
                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
                    <div className="relative z-10">
                        <h2 className="mb-4">{t('contact.title')}</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {t('contact.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <a href="mailto:ken@kawadaai.studio" className="btn-primary inline-flex items-center gap-2">
                                <EmailIcon className="w-5 h-5" />
                                {t('contact.emailBtn')}
                            </a>
                            <a href="https://www.linkedin.com/in/kawadaitsolution/" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                                <LinkedInIcon className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-4">
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                {t('contact.hours')}：{t('contact.hoursValue')}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
