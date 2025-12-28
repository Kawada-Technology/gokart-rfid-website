'use client';

import { useEffect, useState } from 'react';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [toc, setToc] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Extract headings from markdown
        const headingRegex = /^(#{1,3})\s+(.+)$/gm;
        const items: TocItem[] = [];
        let match;

        while ((match = headingRegex.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2];
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');

            items.push({ id, text, level });
        }

        setToc(items);

        // Setup intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66%' }
        );

        // Observe all heading elements
        const headings = document.querySelectorAll('h1, h2, h3');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, [content]);

    if (toc.length === 0) return null;

    return (
        <div className="sticky top-24 glass-card p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <h3 className="font-bold text-lg mb-4">📑 目录</h3>
            <nav className="space-y-2">
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm transition-colors ${activeId === item.id
                                ? 'text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                        style={{
                            paddingLeft: `${(item.level - 1) * 0.75}rem`,
                        }}
                    >
                        {item.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}
