"use client";

import React, { useState, useEffect } from "react";
import "./Quiz.css";

interface QuizOpcao {
  id: number;
  textoOpcao: string;
  ordem: number;
}

interface QuizPergunta {
  id: number;
  pergunta: string;
  ordem: number;
  opcoes: QuizOpcao[];
}

interface QuizData {
  id: number;
  titulo: string;
  descricao: string | null;
  perguntas: QuizPergunta[];
}

interface QuizProps {
  artigoSlug: string;
}

export default function QuizDinamico({ artigoSlug }: QuizProps) {
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [respostas, setRespostas] = useState<Array<{ perguntaId: number; opcaoId: number }>>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    fetchQuiz();
  }, [artigoSlug]);

  const fetchQuiz = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/artigos/${artigoSlug}/quiz`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setError('Quiz não disponível para este artigo');
        } else {
          throw new Error('Erro ao carregar quiz');
        }
        return;
      }
      
      const data = await response.json();
      setQuiz(data);
    } catch (err) {
      console.error('Erro ao carregar quiz:', err);
      setError('Erro ao carregar o quiz. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (opcaoId: number, perguntaId: number, index: number) => {
    if (answered || !quiz) return;

    setSelectedOption(index);
    setAnswered(true);

    const novaResposta = { perguntaId, opcaoId };
    const novasRespostas = [...respostas, novaResposta];
    setRespostas(novasRespostas);

    // Aguardar 1.5 segundos antes de avançar
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (currentQuestion < quiz.perguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      // Finalizar quiz
      await finalizarQuiz(novasRespostas);
    }
  };

  const finalizarQuiz = async (respostasFinais: Array<{ perguntaId: number; opcaoId: number }>) => {
    if (!quiz) return;

    try {
      const tempoConclusao = Math.floor((Date.now() - startTime) / 1000);
      const sessionId = getOrCreateSessionId();

      const response = await fetch(`/api/quiz/${quiz.id}/tentativa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          respostas: respostasFinais,
          sessionId,
          tempoConclusao
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar resultado');
      }

      const data = await response.json();
      setResultado(data);
      setShowResult(true);
    } catch (err) {
      console.error('Erro ao finalizar quiz:', err);
      setError('Erro ao salvar resultado. Mas você completou o quiz!');
      setShowResult(true);
    }
  };

  const getOrCreateSessionId = (): string => {
    let sessionId = localStorage.getItem('quiz_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('quiz_session_id', sessionId);
    }
    return sessionId;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setRespostas([]);
    setShowResult(false);
    setResultado(null);
    setAnswered(false);
    setSelectedOption(null);
  };

  if (loading) {
    return (
      <div className="quiz-loading" style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Carregando quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-error" style={{ textAlign: 'center', padding: '2rem', color: '#d32f2f' }}>
        <p>{error}</p>
      </div>
    );
  }

  if (!quiz || quiz.perguntas.length === 0) {
    return (
      <div className="quiz-empty" style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Nenhum quiz disponível para este artigo.</p>
      </div>
    );
  }

  const perguntaAtual = quiz.perguntas[currentQuestion];

  return (
    <>
      {!showResult ? (
        <div className="quiz-question active">
          <h3>{`${currentQuestion + 1}. ${perguntaAtual.pergunta}`}</h3>
          <div className="quiz-options">
            {perguntaAtual.opcoes.map((opcao, index) => (
              <button
                key={opcao.id}
                onClick={() => handleAnswer(opcao.id, perguntaAtual.id, index)}
                className={`quiz-option ${
                  answered && selectedOption === index ? "selected" : ""
                }`}
                disabled={answered}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}-
                </span>
                <span className="option-text">{opcao.textoOpcao}</span>
              </button>
            ))}
          </div>
          <div className="quiz-progress" style={{ marginTop: '1rem', textAlign: 'center', color: '#666' }}>
            Pergunta {currentQuestion + 1} de {quiz.perguntas.length}
          </div>
        </div>
      ) : (
        <div
          className="quiz-result"
          style={{ textAlign: "center", padding: "30px 20px" }}
        >
          <h3
            style={{ fontSize: "1.5rem", marginBottom: "25px", color: "#333" }}
          >
            Resultado do Quiz
          </h3>
          {resultado && (
            <>
              <p
                className="result-text"
                style={{ fontSize: "1.2rem", marginBottom: "15px" }}
              >
                Você acertou {resultado.pontuacao} de {resultado.totalPerguntas} perguntas!
              </p>
              <p
                style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#F6B600", marginBottom: "25px" }}
              >
                {resultado.percentual}% de acertos
              </p>
              <p style={{ color: "#666", marginBottom: "25px" }}>
                {resultado.percentual >= 70 
                  ? "🎉 Parabéns! Excelente desempenho!" 
                  : resultado.percentual >= 50 
                  ? "👍 Bom trabalho! Continue aprendendo!" 
                  : "💪 Continue estudando! Você vai melhorar!"}
              </p>
            </>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={resetQuiz}
              className="retry-button"
              style={{
                backgroundColor: "#ffc107",
                color: "#000",
                fontWeight: "bold",
                border: "2px solid #071D3B",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#e6ad00";
                e.currentTarget.style.boxShadow = "0 0 5px rgba(7, 29, 59, 0.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#ffc107";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}
