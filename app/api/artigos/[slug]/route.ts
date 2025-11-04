import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const artigo = await prisma.artigo.findUnique({
      where: { 
        slug: slug,
        ativo: true 
      },
      select: {
        id: true,
        titulo: true,
        slug: true,
        subtitulo: true,
        descricao: true,
        componente: true,
        imagemCapa: true,
        categoria: true,
        tags: true,
        autor: true,
        dataPublicacao: true,
        visualizacoes: true,
        premium: true
      }
    });

    if (!artigo) {
      return NextResponse.json(
        { error: 'Artigo não encontrado' },
        { status: 404 }
      );
    }

    // Incrementar visualizações
    await prisma.artigo.update({
      where: { id: artigo.id },
      data: { visualizacoes: { increment: 1 } }
    });

    return NextResponse.json(artigo);
  } catch (error) {
    console.error('Erro ao buscar artigo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}