import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

/**
 * GET /api/seo
 * Fetch all SEO configs
 */
export async function GET() {
    try {
        const configs = await prisma.seoConfig.findMany({
            orderBy: { page: 'asc' },
        });

        return NextResponse.json(configs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch SEO configs' }, { status: 500 });
    }
}

/**
 * POST /api/seo
 * Create a new SEO config for a page
 */
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { page, title, description, keywords, ogImageUrl } = body;

        if (!page || !title || !description) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const config = await prisma.seoConfig.create({
            data: {
                page,
                title,
                description,
                keywords,
                ogImageUrl
            },
        });

        return NextResponse.json(config, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create SEO config' }, { status: 500 });
    }
}
