'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';

// Using standard language codes instead of flags to avoid rendering issues
const languages = [
    { code: 'en', name: 'English', label: 'EN' },
    { code: 'zh', name: '华语', label: 'ZH' },
    { code: 'ms', name: 'Bahasa', label: 'BM' },
    { code: 'ta', name: 'தமிழ்', label: 'TA' },
];

export default function LanguageSelector() {
    const router = useRouter();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find(l => l.code === locale) || languages[1];

    const handleLanguageChange = (langCode: string) => {
        setIsOpen(false);
        Cookies.set('locale', langCode, { expires: 365 });
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all border border-border/50 flex items-center gap-2 disabled:opacity-50"
                aria-label="Select language"
            >
                <span className="text-sm font-bold w-6 text-center">{currentLanguage.label}</span>
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 mt-2 w-48 py-2 bg-card border border-border rounded-lg shadow-lg z-50">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                disabled={isPending}
                                className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors flex items-center gap-3 disabled:opacity-50 ${locale === lang.code ? 'bg-primary/20 text-primary' : ''
                                    }`}
                            >
                                <span className="text-sm font-bold w-8">{lang.label}</span>
                                <span className="text-sm">{lang.name}</span>
                                {locale === lang.code && (
                                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
