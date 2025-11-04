"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function AutismoEmprego() {
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
            src="/imagens/img10.jpg"
            alt="Pessoa autista no ambiente de trabalho"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Autismo e Emprego: Construindo Oportunidades
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 14, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Autismo no Trabalho</span>
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
            <span>Autismo e Emprego</span>
          </div>

          <article className="article-content">
            <p>
              A inclusão de pessoas autistas no mercado de trabalho representa uma oportunidade transformadora tanto para empresas quanto para profissionais. Pessoas autistas trazem habilidades únicas, perspectivas valiosas e contribuições significativas para o ambiente corporativo, quando recebem o suporte adequado e oportunidades justas.
            </p>

            <img
              src="/imagens/img14.jpg"
              alt="Equipe diversa trabalhando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Estudos mostram que apenas 16% das pessoas autistas estão empregadas em tempo integral, uma estatística alarmante considerando suas capacidades. Muitas vezes, os obstáculos não estão nas habilidades técnicas, mas nos processos de recrutamento e ambientes de trabalho não adaptados.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "Pessoas autistas não querem empregos diferentes, querem as mesmas oportunidades que todos os outros." - Temple Grandin
              </p>
            </div>

            <p>
              Empresas progressistas como Microsoft, SAP, IBM e Ford têm implementado programas específicos de contratação de pessoas autistas, reconhecendo que a neurodiversidade traz benefícios concretos como maior atenção aos detalhes, pensamento sistemático e capacidade de detectar padrões.
            </p>

            <img
              src="/imagens/img15.jpg"
              alt="Ambiente de trabalho inclusivo"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              As adaptações necessárias frequentemente são simples e beneficiam todos os colaboradores: instruções claras e escritas, ambientes com menos estímulos sensoriais, flexibilidade de horários e mentores dedicados. Essas mudanças criam ambientes de trabalho mais humanos e eficientes para todos.
            </p>

            <p>
              É fundamental que empregadores compreendam que pessoas autistas podem ter formas diferentes de comunicação e interação social, mas isso não diminui sua capacidade profissional. Com suporte adequado, podem ser colaboradores excepcionalmente dedicados e produtivos.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Inclusão no Trabalho</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Processos de Recrutamento Adaptados</h3>
                <p>
                  Ofereça alternativas às entrevistas tradicionais, como projetos práticos ou entrevistas estruturadas com perguntas claras.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Ambiente Sensorial Adequado</h3>
                <p>
                  Considere iluminação suave, redução de ruídos e espaços tranquilos para momentos de pausa e concentração.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Comunicação Clara</h3>
                <p>
                  Use instruções específicas, evite linguagem figurada e estabeleça expectativas claras sobre tarefas e prazos.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Programas de Mentoria</h3>
                <p>
                  Implemente sistemas de apoio com colegas experientes que possam orientar sobre cultura organizacional e processos.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">O Futuro do Trabalho Inclusivo</h2>
            <div className="conclusao-content">
              <p>
                A inclusão de pessoas autistas no mercado de trabalho não é apenas uma questão de responsabilidade social, mas uma vantagem competitiva. Equipes neurodiversas demonstram maior inovação, resolução criativa de problemas e atenção excepcional à qualidade.
              </p>

              <p>
                Para pessoas autistas, ter um emprego significa muito mais que independência financeira - representa reconhecimento de valor, propósito e inclusão social. É uma oportunidade de contribuir com suas habilidades únicas para a sociedade.
              </p>

              <div className="highlight-box">
                <p>
                  "A diversidade não é sobre ser diferente, é sobre ser valioso. E pessoas autistas trazem valor imenso para qualquer organização." - Anka Wittenberg, SAP
                </p>
              </div>

              <p>
                O caminho para um mercado de trabalho verdadeiramente inclusivo requer esforço conjunto de empregadores, educadores e sociedade. Mas os benefícios - para todos - fazem essa jornada não apenas necessária, mas urgente e recompensadora.
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
                  src="/imagens/img6.jpg"
                  alt="Inclusão"
                  loading="lazy"
                />
                <h3>Inclusão Escolar</h3>
                <p>
                  Como criar ambientes educacionais inclusivos.
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