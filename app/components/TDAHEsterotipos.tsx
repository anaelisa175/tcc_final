"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function TDAHEsterotipos() {
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
            src="/imagens/img5.jpg"
            alt="Pessoa com TDAH em ambiente de trabalho"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              TDAH Além dos Estereótipos
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 14, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>TDAH</span>
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
            <span>TDAH Além dos Estereótipos</span>
          </div>

          <article className="article-content">
            <p>
              O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma das condições neurológicas mais mal compreendidas da atualidade. Frequentemente reduzido a estereótipos de "criança hiperativa" ou "adulto desorganizado", o TDAH na verdade representa um espectro complexo de diferenças neurológicas que afetam a vida de maneiras muito mais sutis e variadas.
            </p>

            <img
              src="/imagens/img6.jpg"
              alt="Pessoa adulta com TDAH trabalhando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Contrariamente ao que muitos acreditam, o TDAH não é apenas sobre não conseguir ficar parado ou prestar atenção. É um conjunto de diferenças no funcionamento executivo do cérebro que pode incluir dificuldades com organização, gestão do tempo, regulação emocional e funcionamento da memória de trabalho.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "TDAH não é sobre falta de atenção. É sobre ter atenção para tudo - e não conseguir filtrar o que é importante." - Dr. Russel Barkley, especialista em TDAH
              </p>
            </div>

            <p>
              Uma das maiores descobertas sobre o TDAH nas últimas décadas foi reconhecer que ele se manifesta de forma muito diferente em meninas e mulheres. Enquanto meninos tendem a apresentar hiperatividade mais óbvia, meninas frequentemente desenvolvem o subtipo "desatento", que pode passar despercebido por anos.
            </p>

            <img
              src="/imagens/img7.jpg"
              alt="Mulher adulta descobrindo TDAH"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              O TDAH em adultos também é frequentemente subestimado. Muitos adultos descobrem sua condição apenas quando seus filhos são diagnosticados, reconhecendo padrões similares em suas próprias vidas. Sintomas como procrastinação crônica, dificuldade em manter relacionamentos e problemas profissionais podem ser sinais não reconhecidos de TDAH adulto.
            </p>

            <p>
              Outro aspecto pouco compreendido é o "hiperfoco" - a capacidade de se concentrar intensamente em atividades de interesse. Pessoas com TDAH podem trabalhar por horas a fio em projetos que as interessam, contradizendo a noção de que têm problemas universais de atenção.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Mitos e Realidades sobre TDAH</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Mito: TDAH é só em crianças</h3>
                <p>
                  Realidade: TDAH é uma condição vitalícia. Muitos adultos descobrem tardiamente e desenvolvem estratégias de enfrentamento.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Mito: Pessoas com TDAH não conseguem se concentrar</h3>
                <p>
                  Realidade: Podem ter hiperfoco em áreas de interesse, concentrando-se intensamente por horas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Mito: TDAH é mais comum em meninos</h3>
                <p>
                  Realidade: Meninas são subdiagnosticadas devido a sintomas menos óbvios e apresentação diferente.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Mito: Medicação é a única solução</h3>
                <p>
                  Realidade: Tratamento eficaz combina medicação, terapia, mudanças no estilo de vida e estratégias de organização.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Compreendendo o TDAH Real</h2>
            <div className="conclusao-content">
              <p>
                O TDAH vai muito além dos estereótipos populares. É uma condição neurológica complexa que afeta cada pessoa de forma única. Compreender essa diversidade é fundamental para oferecer suporte adequado e quebrar preconceitos.
              </p>

              <p>
                Pessoas com TDAH frequentemente desenvolvem criatividade excepcional, capacidade de pensar fora da caixa e energia para múltiplos projetos. Quando recebem o suporte adequado, podem ser extremamente produtivas e inovadoras.
              </p>

              <div className="highlight-box">
                <p>
                  "O TDAH não é um déficit de atenção, é uma diferença de atenção. Não é algo quebrado que precisa ser consertado, mas algo diferente que precisa ser compreendido." - Edward Hallowell, psiquiatra especialista em TDAH
                </p>
              </div>

              <p>
                Reconhecer a diversidade de apresentações do TDAH é o primeiro passo para criar uma sociedade mais inclusiva e compreensiva. Cada pessoa com TDAH merece ser vista além dos estereótipos e apoiada em sua jornada única.
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
                onClick={() => (window.location.href = "/artigo/autismo-comunicacao-como-incluir")}
              >
                <img
                  src="/imagens/img3.jpg"
                  alt="Autismo e comunicação"
                  loading="lazy"
                />
                <h3>Autismo e Comunicação: Como Incluir?</h3>
                <p>
                  Estratégias práticas para uma comunicação mais inclusiva.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img8.jpg"
                  alt="Mais artigos"
                  loading="lazy"
                />
                <h3>TDAH na Vida Adulta</h3>
                <p>
                  Como navegar a vida adulta com TDAH.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img9.jpg"
                  alt="Hiperfoco TDAH"
                  loading="lazy"
                />
                <h3>O Poder do Hiperfoco</h3>
                <p>Como aproveitar o hiperfoco como ferramenta produtiva.</p>
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