"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function AutismoComunicacao() {
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
        {/* Hero Section */}
        <section className="hero" id="heroSection">
          <img
            src="/imagens/img3.jpg"
            alt="Pessoas se comunicando de forma inclusiva"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Autismo e Comunicação: Como Incluir?
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 14, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Autismo</span>
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
              aria-label="Rolar para o conteúdo do artigo"
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

        {/* Main Content */}
        <main className="main-content" id="articleStart">
          <div className="breadcrumb">
            <a href="/">Início</a>
            <span className="divider">/</span>
            <a href="/artigos">Artigos</a>
            <span className="divider">/</span>
            <span>Autismo e Comunicação: Como Incluir?</span>
          </div>

          <article className="article-content">
            <p>
              A comunicação com pessoas autistas não precisa ser um desafio intransponível. Com compreensão, paciência e algumas adaptações simples, podemos criar ambientes mais inclusivos onde todos se sintam valorizados e compreendidos. O autismo afeta a comunicação de maneiras únicas para cada pessoa, mas isso não significa que a comunicação seja impossível - apenas diferente.
            </p>

            <img
              src="/imagens/img10.jpg"
              alt="Pessoa autista se comunicando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              É importante entender que pessoas autistas podem ter diferentes necessidades comunicativas. Algumas podem ser verbais e expressivas, outras podem usar comunicação alternativa como gestos, imagens ou dispositivos tecnológicos. Algumas podem ter dificuldades com linguagem figurada, enquanto outras são extremamente eloquentes em seus interesses especiais.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "Quando você conhece uma pessoa autista, você conhece uma pessoa autista." - Dr. Stephen Shore, destacando a individualidade de cada pessoa no espectro
              </p>
            </div>

            <p>
              A comunicação inclusiva começa com o respeito pela forma única de cada pessoa se expressar. Isso significa dar tempo para processamento, usar linguagem clara e direta, e estar aberto a diferentes formas de comunicação. Muitas pessoas autistas preferem comunicação escrita ou precisam de tempo extra para formular respostas.
            </p>

            <img
              src="/imagens/img11.jpg"
              alt="Ambiente inclusivo de comunicação"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              No ambiente de trabalho, pequenas adaptações podem fazer uma grande diferença. Oferecer instruções por escrito além das verbais, permitir pausas para processamento durante reuniões, e criar ambientes sensorialmente confortáveis são estratégias simples mas eficazes.
            </p>

            <p>
              Na educação, professores inclusivos aprendem a reconhecer diferentes estilos comunicativos e adaptam suas abordagens. Isso pode incluir usar apoios visuais, permitir diferentes formas de demonstrar conhecimento, e criar rotinas previsíveis que reduzem a ansiedade comunicativa.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Comunicação Inclusiva</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Linguagem Clara e Direta</h3>
                <p>
                  Use frases simples, evite sarcasmo e linguagem figurada. Seja específico sobre expectativas e instruções.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Tempo para Processamento</h3>
                <p>
                  Permita pausas após fazer perguntas. Evite pressionar por respostas imediatas e respeite o ritmo individual.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Apoios Visuais</h3>
                <p>
                  Use imagens, diagramas e textos escritos para complementar a comunicação verbal e facilitar a compreensão.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Ambiente Sensorial Adequado</h3>
                <p>
                  Minimize distrações sensoriais como ruídos altos, luzes muito brilhantes ou ambientes muito movimentados.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Construindo Pontes de Comunicação</h2>
            <div className="conclusao-content">
              <p>
                A comunicação inclusiva com pessoas autistas não é apenas sobre técnicas e estratégias - é sobre reconhecer a humanidade e o valor único de cada pessoa. Quando criamos espaços comunicativos mais acessíveis, beneficiamos não apenas pessoas autistas, mas toda a comunidade.
              </p>

              <p>
                Ambientes inclusivos são mais criativos, diversos e inovadores. Pessoas autistas frequentemente trazem perspectivas únicas, atenção excepcional a detalhes e insights valiosos quando podem se comunicar de forma confortável.
              </p>

              <div className="highlight-box">
                <p>
                  "A inclusão não é sobre fazer com que pessoas diferentes se encaixem no mundo como ele é. É sobre criar um mundo onde todas as diferenças possam florescer." - Ari Ne'eman, ativista autista
                </p>
              </div>

              <p>
                Cada conversa respeitosa, cada adaptação feita com cuidado, e cada esforço para compreender melhor contribui para uma sociedade mais inclusiva. A comunicação autêntica acontece quando nos abrimos para aprender uns com os outros, reconhecendo que existem muitas maneiras válidas de se expressar e conectar.
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
                onClick={() => (window.location.href = "/artigo/neurodivergencia-o-que-e-por-que-importa")}
              >
                <img
                  src="/imagens/img1.jpg"
                  alt="Neurodivergência"
                  loading="lazy"
                />
                <h3>Neurodivergência: O Que É e Por Que Importa?</h3>
                <p>
                  Compreenda o conceito revolucionário da neurodivergência.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigo/tdah-alem-dos-estereotipos")}
              >
                <img
                  src="/imagens/img5.jpg"
                  alt="TDAH além dos estereótipos"
                  loading="lazy"
                />
                <h3>TDAH Além dos Estereótipos</h3>
                <p>
                  Descubra como o TDAH afeta a vida além da impulsividade.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img12.jpg"
                  alt="Mais artigos"
                  loading="lazy"
                />
                <h3>Sensorialidade no Autismo</h3>
                <p>
                  Compreendendo as diferenças sensoriais no espectro autista.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img13.jpg"
                  alt="Inclusão escolar"
                  loading="lazy"
                />
                <h3>Autismo na Escola</h3>
                <p>Estratégias para inclusão escolar efetiva.</p>
                <span className="leia-mais">Ler artigo →</span>
              </div>
            </div>
          </section>
        </main>

        {/* Botões flutuantes */}
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