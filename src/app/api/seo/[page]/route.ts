import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

/**
 * GET /api/seo/[page]
 * Get SEO config for a specific page path (e.g. "home", "about")
 * Note: 'page' parameter represents the unique route identifier
 */
export async function GET(request: Request, { params }: { params: Promise<{ page: string }> }) {
    const { page } = await params
    try {
        const config = await prisma.seoConfig.findUnique({
            where: { page },
        });

        if (!config) {
            return NextResponse.json({ error: 'Config not found' }, { status: 404 });
        }

        return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

/**
 * PATCH /api/seo/[page]
 * Update SEO config
 */
export async function PATCH(request: Request, { params }: { params: Promise<{ page: string }> }) {
    const { page } = await params
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();

        const config = await prisma.seoConfig.update({
            where: { page },
            data: {
                ...body,
                updatedAt: new Date(),
            },
        });

        return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update config' }, { status: 500 });
    }
}

/**
 * DELETE /api/seo/[page]
 * Delete SEO config
 */
export async function DELETE(request: Request, { params }: { params: Promise<{ page: string }> }) {
    const { page } = await params
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await prisma.seoConfig.delete({
            where: { page },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete config' }, { status: 500 });
    }
}
