"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function AnsiedadeNeurodivergencia() {
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openShareModal = () => {
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="artigo-main">
        <section className="hero" id="heroSection">
          <img
            src="/imagens/img4.jpg"
            alt="Pessoa lidando com ansiedade"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Ansiedade e Neurodivergência: Navegando Águas Complexas
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 18, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Saúde Mental</span>
              </div>
            </div>

            <button
              className="scroll-down artigo-seta-flutuante"
              style={{
                position: "absolute",
                bottom: "-1rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                zIndex: 3
              }}
              onClick={() => {
                const articleStart = document.getElementById("articleStart");
                if (articleStart) {
                  articleStart.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </section>

        <main className="main-content" id="articleStart">
          <div className="breadcrumb">
            <a href="/">Início</a>
            <span className="divider">/</span>
            <a href="/artigos">Artigos</a>
            <span className="divider">/</span>
            <span>Ansiedade e Neurodivergência</span>
          </div>

          <article className="article-content">
            <p>
              A ansiedade em pessoas neurodivergentes apresenta características únicas e complexas que merecem compreensão específica. Não se trata apenas de nervosismo ou preocupação comum, mas de uma resposta neurológica a um mundo que frequentemente não foi projetado para mentes neurodivergentes.
            </p>

            <img
              src="/imagens/img3.jpg"
              alt="Pessoa meditando em ambiente calmo"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Estudos mostram que pessoas autistas têm taxa de ansiedade até 4 vezes maior que a população geral. Para pessoas com TDAH, a coocorrência de ansiedade chega a 50%. Essa alta prevalência não é coincidência, mas resultado de fatores neurológicos, sensoriais e sociais específicos da neurodivergência.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A ansiedade em pessoas neurodivergentes não é fraqueza, é a resposta natural de um sistema nervoso único tentando navegar em um mundo neurotípico." - Dr. Michelle Mowbray
              </p>
            </div>

            <p>
              Os gatilhos de ansiedade podem incluir sobrecarga sensorial, mudanças inesperadas na rotina, situações sociais complexas, mascaramento constante ou pressão para se conformar a expectativas neurotípicas. Esses fatores criam um estado de alerta constante que pode ser emocionalmente e fisicamente esgotante.
            </p>

            <img
              src="/imagens/img14.jpg"
              alt="Estratégias de autorregulação"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              O mascaramento - esconder características neurodivergentes para se encaixar socialmente - é uma fonte significativa de ansiedade. Esse processo constante de monitoramento e supressão de comportamentos naturais cria tensão psicológica crônica e pode levar ao esgotamento autístico ou burnout.
            </p>

            <p>
              É fundamental reconhecer que a ansiedade neurodivergente pode se manifestar de formas atípicas: estimming excessivo, mutismo seletivo, rigidez comportamental ou meltdowns. Estes não são "comportamentos problemáticos", mas sinais de que a pessoa precisa de apoio e compreensão.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias de Apoio e Manejo</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Ambiente Sensorial Adequado</h3>
                <p>
                  Crie espaços com iluminação suave, controle de ruído e texturas confortáveis para reduzir sobrecarga sensorial.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Rotinas Previsíveis</h3>
                <p>
                  Estabeleça estruturas consistentes e comunique mudanças com antecedência para reduzir ansiedade antecipatória.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Técnicas de Autorregulação</h3>
                <p>
                  Ensine e encoraje estratégias como respiração profunda, estimming positivo e pausas regulares para autocuidado.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Apoio Terapêutico Especializado</h3>
                <p>
                  Busque profissionais com experiência em neurodivergência para terapias adaptadas às necessidades específicas.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Caminho para o Bem-Estar</h2>
            <div className="conclusao-content">
              <p>
                Compreender a ansiedade neurodivergente é o primeiro passo para criar estratégias eficazes de apoio. Não se trata de "curar" ou "normalizar", mas de desenvolver ferramentas que permitam que pessoas neurodivergentes naveguem o mundo com maior conforto e autenticidade.
              </p>

              <p>
                O autocuidado para pessoas neurodivergentes pode incluir necessidades específicas como tempo sozinho para recarregar, atividades de stimming, interesses especiais como forma de regulação emocional, e a liberdade de ser autêntico sem mascaramento constante.
              </p>

              <div className="highlight-box">
                <p>
                  "Minha ansiedade diminuiu quando aprendi que não preciso me forçar a ser neurotípica. Aceitar minha neurodivergência foi o primeiro passo para minha paz interior." - Pessoa autista
                </p>
              </div>

              <p>
                O futuro do cuidado em saúde mental deve incluir perspectivas neurodivergentes, reconhecendo que abordagens que funcionam para pessoas neurotípicas podem não ser adequadas. A representatividade neurodivergente em pesquisa e prática clínica é essencial para cuidados verdadeiramente inclusivos.
              </p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <Quiz />
            </div>
          </section>

          <section className="artigos-sugeridos animate__animated" id="artigosSugeridos">
            <h2 className="proposta-title">Continue Explorando</h2>
            <div className="sugeridos-grid">
              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img8.jpg"
                  alt="TDAH na vida adulta"
                  loading="lazy"
                />
                <h3>TDAH na Vida Adulta</h3>
                <p>
                  Navegando os desafios do TDAH adulto.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigo/autismo-comunicacao-como-incluir")}
              >
                <img
                  src="/imagens/img3.jpg"
                  alt="Autismo e comunicação"
                  loading="lazy"
                />
                <h3>Autismo e Comunicação</h3>
                <p>
                  Estratégias para uma comunicação mais inclusiva.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img7.jpg"
                  alt="Sensorialidade"
                  loading="lazy"
                />
                <h3>Sensorialidade no Autismo</h3>
                <p>
                  Compreendendo as diferenças sensoriais.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img1.jpg"
                  alt="Neurodivergência"
                  loading="lazy"
                />
                <h3>Neurodivergência</h3>
                <p>O que é e por que importa para nossa sociedade.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
            </div>
          </section>
        </main>

        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            zIndex: 9999
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#F6B600",
              color: "#071D3B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#071D3B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>

          <button
            onClick={openShareModal}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#071D3B",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </button>
        </div>
      </main>
      <Footer />
      <ShareModal isOpen={shareModalOpen} onClose={closeShareModal} />
    </>
  );
}