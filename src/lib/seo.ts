import prisma from '@/lib/prisma';
import { Metadata } from 'next';

/**
 * Fetch SEO config from database for a specific page
 * Falls back to default values if not found
 */
export async function getSeoMetadata(page: string, defaults: Metadata = {}): Promise<Metadata> {
    try {
        const config = await prisma.seoConfig.findUnique({
            where: { page },
        });

        if (!config) {
            return defaults;
        }

        return {
            title: config.title,
            description: config.description,
            keywords: config.keywords || undefined,
            openGraph: {
                title: config.title,
                description: config.description,
                images: config.ogImageUrl ? [config.ogImageUrl] : undefined,
            },
            ...defaults, // Merge with any additional defaults
        };
    } catch (error) {
        console.error(`Failed to fetch SEO config for page: ${page}`, error);
        return defaults;
    }
}
