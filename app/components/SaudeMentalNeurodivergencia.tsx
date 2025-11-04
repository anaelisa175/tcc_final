"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function SaudeMentalNeurodivergencia() {
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
            src="/imagens/img14.jpg"
            alt="Bem-estar mental neurodivergente"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Saúde Mental e Neurodivergência: Cuidado Integral e Inclusivo
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 21, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Saúde Mental & Bem-estar</span>
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
            <span>Saúde Mental e Neurodivergência</span>
          </div>

          <article className="article-content">
            <p>
              A saúde mental de pessoas neurodivergentes requer uma abordagem especializada que reconheça as intersecções complexas entre neurodivergência, experiências de vida e bem-estar psicológico. Não se trata apenas de aplicar modelos neurotípicos, mas de desenvolver compreensões e práticas verdadeiramente inclusivas.
            </p>

            <img
              src="/imagens/img3.jpg"
              alt="Terapia inclusiva para neurodivergentes"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Pessoas neurodivergentes enfrentam taxas significativamente maiores de ansiedade, depressão e outras condições de saúde mental. Isso não é coincidência, mas resultado de fatores como mascaramento constante, rejeição social, falta de apoio adequado e tentativas de se conformar a expectativas neurotípicas.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A saúde mental neurodivergente não pode ser medida pelos padrões neurotípicos. Precisamos redefinir o que significa bem-estar para mentes diferentes." - Dr. Ari Ne'eman
              </p>
            </div>

            <p>
              O burnout autístico, por exemplo, é uma condição específica resultante de sobrecarga sensorial, social e cognitiva prolongada. Diferente do burnout típico, pode incluir perda de habilidades, regressão em capacidades anteriormente desenvolvidas e necessidade de períodos extensos de recuperação.
            </p>

            <img
              src="/imagens/img16.jpg"
              alt="Autocuidado neurodivergente"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              Intervenções de saúde mental para pessoas neurodivergentes devem incluir estratégias sensoriais, reconhecimento de stimming como autorregulação saudável, respeito por necessidades de rotina e compreensão de que comportamentos aparentemente "problemáticos" podem ser tentativas de enfrentamento.
            </p>

            <p>
              A representatividade neurodivergente na saúde mental é crucial. Terapeutas neurodivergentes trazem perspectivas únicas e compreensão experiencial que pode ser transformadora para clientes que finalmente se sentem verdadeiramente compreendidos em suas experiências.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Práticas de Bem-Estar Neurodivergente</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Autocuidado Sensorial</h3>
                <p>
                  Desenvolva rotinas que incluam regulação sensorial, ambientes calmos e estratégias personalizadas de autorregulação.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Terapia Neurodiversa</h3>
                <p>
                  Busque profissionais com formação específica em neurodivergência ou que demonstrem compreensão genuína das diferenças neurológicas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Comunidade e Conexão</h3>
                <p>
                  Participe de grupos de apoio neurodivergentes onde possa ser autêntico sem necessidade de mascaramento.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Aceitação e Advocacia</h3>
                <p>
                  Pratique autocompaixão, celebre suas diferenças e engaje-se em advocacia pelos direitos neurodivergentes.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Redefinindo Saúde Mental Inclusiva</h2>
            <div className="conclusao-content">
              <p>
                O futuro da saúde mental deve abraçar a neurodiversidade como parte fundamental da experiência humana. Isso significa desenvolver novos modelos de bem-estar que celebrem diferenças neurológicas em vez de tentar "normalizá-las".
              </p>

              <p>
                Quando pessoas neurodivergentes recebem suporte adequado, compreensão genuína e espaços para serem autênticas, sua saúde mental floresce. Elas podem contribuir de formas extraordinárias para suas comunidades, trazendo perspectivas e habilidades únicas.
              </p>

              <div className="highlight-box">
                <p>
                  "Minha saúde mental melhorou drasticamente quando parei de tentar ser neurotípica e comecei a abraçar minha neurodivergência como parte integral de quem eu sou." - Pessoa autista
                </p>
              </div>

              <p>
                A revolução na saúde mental neurodivergente não é apenas sobre melhor atendimento - é sobre transformar nossa compreensão do que significa ser humano. Quando honramos a diversidade neurológica, criamos uma sociedade mais compassiva, inclusiva e rica para todos.
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
                  src="/imagens/img4.jpg"
                  alt="Ansiedade neurodivergência"
                  loading="lazy"
                />
                <h3>Ansiedade e Neurodivergência</h3>
                <p>
                  Navegando águas complexas da saúde mental.
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