import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/articles - Get all articles
export async function GET() {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create new article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const article = await db.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        thumbnail: body.thumbnail,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        tags: body.tags,
        author: body.author,
      }
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
