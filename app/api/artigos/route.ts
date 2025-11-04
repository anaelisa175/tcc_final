import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get('categoria');
    const premium = searchParams.get('premium');
    const destaque = searchParams.get('destaque');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const where: any = {
      ativo: true
    };

    if (categoria) {
      where.categoria = categoria;
    }

    if (premium !== null) {
      where.premium = premium === 'true';
    }

    if (destaque !== null) {
      where.destaque = destaque === 'true';
    }

    const artigos = await prisma.artigo.findMany({
      where,
      select: {
        id: true,
        titulo: true,
        slug: true,
        subtitulo: true,
        descricao: true,
        imagemCapa: true,
        imagemPrincipal: true,
        categoria: true,
        tags: true,
        autor: true,
        dataPublicacao: true,
        visualizacoes: true,
        destaque: true,
        premium: true
      },
      orderBy: [
        { destaque: 'desc' },
        { dataPublicacao: 'desc' }
      ],
      take: limit,
      skip: offset
    });

    const total = await prisma.artigo.count({ where });

    return NextResponse.json({
      artigos,
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    });
  } catch (error) {
    console.error('Erro ao buscar artigos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}