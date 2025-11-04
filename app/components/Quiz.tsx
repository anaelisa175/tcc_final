"use client";

import React, { useState } from "react";
import "./Quiz.css";

// Componente de Quiz Interativo
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: '1. O que significa o termo "neurodivergente"?',
      options: [
        {
          text: "Uma pessoa com funcionamento neurológico atípico",
          isCorrect: true
        },
        { text: "Alguém com doenças mentais graves", isCorrect: false },
        { text: "Pessoas com QI acima da média", isCorrect: false },
        { text: "Indivíduos com lesões cerebrais", isCorrect: false }
      ]
    },
    {
      id: 2,
      question:
        "2. Qual porcentagem da população estima-se ser neurodivergente?",
      options: [
        { text: "5-10%", isCorrect: false },
        { text: "15-20%", isCorrect: true },
        { text: "25-30%", isCorrect: false },
        { text: "Menos de 5%", isCorrect: false }
      ]
    },
    {
      id: 3,
      question: "3. Qual destes NÃO é um benefício comum da neurodivergência?",
      options: [
        { text: "Pensamento criativo", isCorrect: false },
        { text: "Habilidade de hiperfoco", isCorrect: false },
        { text: "Maior agressividade", isCorrect: true },
        { text: "Atenção a detalhes", isCorrect: false }
      ]
    }
  ];

  const handleAnswer = (isCorrect, index) => {
    if (answered) return; // Evita múltiplos cliques

    setSelectedOption(index);
    setAnswered(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Avançar para próxima pergunta após 1.5 segundo
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setSelectedOption(null);
  };

  return (
    <>
      {!showResult ? (
        <div className="quiz-question active">
          <h3>{questions[currentQuestion].question}</h3>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.isCorrect, index)}
                className={`quiz-option ${
                  answered
                    ? option.isCorrect
                      ? "correct"
                      : selectedOption === index
                      ? "incorrect"
                      : ""
                    : ""
                }`}
                disabled={answered}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}-
                </span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
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
          <p
            className="result-text"
            style={{ fontSize: "1.2rem", marginBottom: "25px" }}
          >
            Você acertou {score} de {questions.length} perguntas!
          </p>
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
                e.currentTarget.style.boxShadow =
                  "0 0 5px rgba(7, 29, 59, 0.7)";
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

export default Quiz;
