import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

/**
 * GET /api/blog
 * Fetch all blog posts
 */
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status'); // 'published' or 'draft'

        const where = status ? { status } : {};

        const posts = await prisma.blogPost.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

/**
 * POST /api/blog
 * Create a new blog post
 */
export async function POST(request: Request) {
    try {
        // 1. Check Auth (Must be admin)
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 2. Parse Body
        const body = await request.json();
        const { title, slug, content, excerpt, category, tags, status, coverImage } = body;

        // 3. Validation
        if (!title || !slug || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 4. Create in DB
        const post = await prisma.blogPost.create({
            data: {
                title,
                slug,
                content,
                excerpt,
                category: category || 'General',
                tags: tags || [],
                status: status || 'draft',
                coverImage,
                publishedAt: status === 'published' ? new Date() : null,
            },
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error('Create Post Error:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}
