import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/articles/[slug] - Get article by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const article = await db.article.findUnique({
      where: { slug: params.slug }
    });

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}

// PUT /api/articles/[slug] - Update article
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();

    const article = await db.article.update({
      where: { slug: params.slug },
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

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE /api/articles/[slug] - Delete article
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await db.article.delete({
      where: { slug: params.slug }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}
