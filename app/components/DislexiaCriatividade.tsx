"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function DislexiaCriatividade() {
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
            src="/imagens/img13.jpg"
            alt="Dislexia e pensamento criativo"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Dislexia e Criatividade: Transformando Desafios em Superpoderes
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 22, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Dislexia & Criatividade</span>
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
            <span>Dislexia e Criatividade</span>
          </div>

          <article className="article-content">
            <p>
              A dislexia é muito mais que uma "dificuldade de leitura". É uma diferença neurológica que frequentemente vem acompanhada de habilidades extraordinárias em pensamento visual, criatividade, resolução de problemas e capacidade de ver o "panorama geral" de formas que mentes convencionais não conseguem.
            </p>

            <img
              src="/imagens/img11.jpg"
              alt="Criança disléxica sendo criativa"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Pesquisas mostram que pessoas com dislexia frequentemente demonstram habilidades superiores em raciocínio espacial, pensamento 3D, capacidade de detectar padrões impossíveis e extraordinária criatividade. Estes não são "talentos compensatórios", mas características intrínsecas do cérebro disléxico.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A dislexia não é uma barreira para o sucesso, é uma estrada diferente para a genialidade. Muitos dos nossos maiores inovadores eram disléxicos." - Richard Branson
              </p>
            </div>

            <p>
              Grandes mentes criativas da história, incluindo Leonardo da Vinci, Einstein, Steven Spielberg e Richard Branson, eram disléxicos. Eles transformaram suas diferenças neurológicas em vantagens competitivas, criando obras de arte, teorias científicas e empresas revolucionárias.
            </p>

            <img
              src="/imagens/img15.jpg"
              alt="Arte e design por pessoa disléxica"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              O cérebro disléxico processa informações de forma holística e visual, permitindo conexões criativas que mentes lineares podem não fazer. Essa capacidade de "pensar fora da caixa" é especialmente valiosa em campos como design, arquitetura, empreendedorismo e resolução criativa de problemas.
            </p>

            <p>
              Infelizmente, sistemas educacionais tradicionais frequentemente focam apenas nas dificuldades da dislexia, negligenciando suas forças. Isso pode levar à baixa autoestima e ao desperdício de talentos extraordinários que poderiam beneficiar toda a sociedade.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Potencializar Talentos</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Ensino Multissensorial</h3>
                <p>
                  Use métodos que combinem visual, auditivo e tátil para aproveitar as forças do processamento disléxico.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Ferramentas Tecnológicas</h3>
                <p>
                  Implemente softwares de texto-para-fala, corretores ortográficos avançados e aplicativos de organização visual.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Foco nas Forças</h3>
                <p>
                  Identifique e cultive habilidades em áreas como arte, design, engenharia, empreendedorismo e pensamento estratégico.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Ambiente de Apoio</h3>
                <p>
                  Crie espaços que celebrem diferentes formas de inteligência e permitam expressão criativa diversificada.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Redefinindo o Sucesso Disléxico</h2>
            <div className="conclusao-content">
              <p>
                A verdadeira inclusão para pessoas com dislexia vai além de acomodações - requer uma revolução na forma como definimos inteligência e sucesso. Quando reconhecemos que há múltiplas formas de ser inteligente, pessoas disléxicas podem florescer e contribuir de maneiras extraordinárias.
              </p>

              <p>
                Empresas progressistas estão descobrindo que contratar pessoas disléxicas não é apenas socialmente responsável - é estrategicamente inteligente. Essas mentes trazem perspectivas únicas, soluções inovadoras e capacidade de liderança visionária.
              </p>

              <div className="highlight-box">
                <p>
                  "Minha dislexia me ensinou a ver conexões que outros não veem. É minha maior vantagem competitiva no mundo dos negócios." - Barbara Corcoran
                </p>
              </div>

              <p>
                O futuro pertence àqueles que podem pensar diferente, inovar constantemente e resolver problemas complexos de formas criativas. Pessoas com dislexia não são apenas capazes de prosperar nesse futuro - elas podem liderá-lo. Quando celebramos a neurodiversidade, todos nós nos beneficiamos de um mundo mais criativo e inovador.
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
                  src="/imagens/img5.jpg"
                  alt="Neurodivergência criatividade"
                  loading="lazy"
                />
                <h3>Neurodivergência e Criatividade</h3>
                <p>
                  Quando diferenças geram inovação.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img6.jpg"
                  alt="Inclusão escolar"
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
                  src="/imagens/img12.jpg"
                  alt="Tecnologia"
                  loading="lazy"
                />
                <h3>Tecnologia e Neurodivergência</h3>
                <p>
                  Ferramentas de empoderamento tecnológico.
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