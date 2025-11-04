import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  try {
    const { quizId } = await params;
    const quizIdNum = parseInt(quizId);
    
    if (isNaN(quizIdNum)) {
      return NextResponse.json(
        { error: 'ID do quiz inválido' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { respostas, sessionId, tempoConclusao } = body;

    if (!respostas || !Array.isArray(respostas)) {
      return NextResponse.json(
        { error: 'Respostas inválidas' },
        { status: 400 }
      );
    }

    // Verificar se o quiz existe
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizIdNum },
      include: {
        perguntas: {
          include: {
            opcoes: true
          }
        }
      }
    });

    if (!quiz) {
      return NextResponse.json(
        { error: 'Quiz não encontrado' },
        { status: 404 }
      );
    }

    // Validar e calcular pontuação
    let pontuacao = 0;
    const respostasProcessadas = [];

    for (const resposta of respostas) {
      const { perguntaId, opcaoId } = resposta;
      
      // Buscar a opção selecionada
      const opcao = await prisma.quizOpcao.findUnique({
        where: { id: parseInt(opcaoId) }
      });

      if (!opcao) {
        continue; // Pular respostas inválidas
      }

      const correta = opcao.correta;
      
      if (correta) {
        pontuacao++;
      }

      respostasProcessadas.push({
        perguntaId: parseInt(perguntaId),
        opcaoId: parseInt(opcaoId),
        correta: correta
      });
    }

    // Criar tentativa com respostas
    const tentativa = await prisma.quizTentativa.create({
      data: {
        quizId: quizIdNum,
        sessionId: sessionId || null,
        pontuacao,
        totalPerguntas: quiz.perguntas.length,
        tempoConclusao: tempoConclusao || null,
        completado: true,
        respostas: {
          create: respostasProcessadas
        }
      },
      include: {
        respostas: {
          include: {
            pergunta: {
              select: {
                id: true,
                pergunta: true
              }
            },
            opcao: {
              select: {
                id: true,
                textoOpcao: true,
                correta: true
              }
            }
          }
        }
      }
    });

    // Retornar resultado
    return NextResponse.json({
      tentativaId: tentativa.id,
      pontuacao: tentativa.pontuacao,
      totalPerguntas: tentativa.totalPerguntas,
      percentual: Math.round((tentativa.pontuacao / tentativa.totalPerguntas) * 100),
      respostas: tentativa.respostas,
      completado: tentativa.completado,
      dataTentativa: tentativa.dataTentativa
    });

  } catch (error) {
    console.error('Erro ao salvar tentativa:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// GET - Buscar tentativa específica
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  try {
    const { quizId } = await params;
    const { searchParams } = new URL(request.url);
    const tentativaId = searchParams.get('tentativaId');

    if (!tentativaId) {
      return NextResponse.json(
        { error: 'ID da tentativa não fornecido' },
        { status: 400 }
      );
    }

    const tentativa = await prisma.quizTentativa.findUnique({
      where: { id: parseInt(tentativaId) },
      include: {
        respostas: {
          include: {
            pergunta: true,
            opcao: true
          }
        }
      }
    });

    if (!tentativa) {
      return NextResponse.json(
        { error: 'Tentativa não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(tentativa);

  } catch (error) {
    console.error('Erro ao buscar tentativa:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
