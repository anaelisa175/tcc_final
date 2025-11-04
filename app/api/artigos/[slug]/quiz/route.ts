import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Buscar artigo com seu quiz
    const artigo = await prisma.artigo.findUnique({
      where: { 
        slug: slug,
        ativo: true 
      },
      include: {
        quizzes: {
          where: { ativo: true },
          include: {
            perguntas: {
              where: { ativo: true },
              orderBy: { ordem: 'asc' },
              include: {
                opcoes: {
                  orderBy: { ordem: 'asc' },
                  select: {
                    id: true,
                    textoOpcao: true,
                    ordem: true,
                    // NÃO incluir o campo 'correta' para não revelar a resposta
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!artigo) {
      return NextResponse.json(
        { error: 'Artigo não encontrado' },
        { status: 404 }
      );
    }

    if (!artigo.quizzes || artigo.quizzes.length === 0) {
      return NextResponse.json(
        { error: 'Quiz não disponível para este artigo' },
        { status: 404 }
      );
    }

    // Retornar o primeiro quiz ativo
    const quiz = artigo.quizzes[0];

    return NextResponse.json({
      id: quiz.id,
      titulo: quiz.titulo,
      descricao: quiz.descricao,
      perguntas: quiz.perguntas
    });
    
  } catch (error) {
    console.error('Erro ao buscar quiz:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
