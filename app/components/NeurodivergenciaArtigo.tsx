"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuizDinamico from "./QuizDinamico";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function NeurodivergenciaArtigo() {
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
            src="/imagens/img1.jpg"
            alt="Pessoa neurodivergente lendo"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Neurodivergência: O Que É e Por Que Importa?
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 14, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Neurociência</span>
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
            <span>Neurodivergência: O Que É e Por Que Importa?</span>
          </div>

          <article className="article-content">
            <p>
              A neurodivergência é um conceito revolucionário que está transformando nossa compreensão sobre as diferenças cognitivas. Em vez de ver condições como autismo, TDAH, dislexia e outras como "distúrbios", a neurodivergência as reconhece como variações naturais e valiosas do funcionamento cerebral humano.
            </p>

            <img
              src="/imagens/img2.jpg"
              alt="Ilustração de conexões neurais diversas"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              O termo foi cunhado pela socióloga australiana Judy Singer em 1998, que também é autista. Singer propôs que a diversidade neurológica deveria ser reconhecida e respeitada da mesma forma que outras formas de diversidade humana. Essa perspectiva desafia o modelo médico tradicional que patologiza as diferenças cognitivas.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A neurodivergência não é um defeito a ser corrigido, mas uma diferença a ser compreendida e valorizada." - Judy Singer, criadora do termo neurodivergência
              </p>
            </div>

            <p>
              Estima-se que 15-20% da população mundial seja neurodivergente. Isso inclui pessoas com autismo, TDAH, dislexia, dispraxia, síndrome de Tourette, e muitas outras condições. Cada pessoa neurodivergente é única, com seu próprio conjunto de habilidades, desafios e perspectivas.
            </p>

            <img
              src="/imagens/img14.jpg"
              alt="Diversidade de pessoas trabalhando juntas"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              No ambiente educacional, a compreensão da neurodivergência está levando a mudanças significativas. Escolas inclusivas estão adotando métodos de ensino que acomodam diferentes estilos de aprendizagem, beneficiando não apenas estudantes neurodivergentes, mas todos os alunos.
            </p>

            <p>
              No mercado de trabalho, empresas progressistas estão descobrindo os benefícios de equipes neurodiversas. Pessoas neurodivergentes frequentemente trazem habilidades únicas como atenção excepcional a detalhes, pensamento criativo, honestidade direta e capacidade de hiperfoco em áreas de interesse.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Características da Neurodivergência</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Diversidade de condições</h3>
                <p>
                  Inclui autismo, TDAH, dislexia, dispraxia, síndrome de Tourette, discalculia e muitas outras condições neurológicas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Forças e desafios únicos</h3>
                <p>
                  Cada pessoa neurodivergente tem um perfil único de habilidades excepcionais e áreas de dificuldade.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Perspectivas valiosas</h3>
                <p>
                  Oferecem maneiras diferentes de pensar, resolver problemas e ver o mundo, enriquecendo nossa sociedade.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Necessidade de acomodações</h3>
                <p>
                  Frequentemente precisam de ambientes e métodos adaptados para expressar seu potencial máximo.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Por Que a Neurodivergência Importa</h2>
            <div className="conclusao-content">
              <p>
                A neurodivergência importa porque representa uma parte fundamental da diversidade humana. Quando reconhecemos e valorizamos essas diferenças, criamos uma sociedade mais inclusiva e inovadora.
              </p>

              <p>
                Pessoas neurodivergentes têm contribuído enormemente para a ciência, arte, tecnologia e cultura ao longo da história. Figuras como Albert Einstein, Temple Grandin, e muitos outros exemplificam como o pensamento neurodivergente pode levar a descobertas e inovações extraordinárias.
              </p>

              <div className="highlight-box">
                <p>
                  "Se pudéssemos eliminar o autismo do mundo, estaríamos eliminando também uma fonte significativa de criatividade e inovação humana." - Temple Grandin
                </p>
              </div>

              <p>
                Criar um mundo mais acessível para pessoas neurodivergentes não apenas beneficia essa população, mas melhora a qualidade de vida para todos. Ambientes mais flexíveis, comunicação mais clara e métodos de trabalho diversificados beneficiam toda a sociedade.
              </p>
            </div>
          </section>

          <section className="quiz-section animate__animated">
            <h2 className="proposta-title">Teste Seu Conhecimento</h2>
            <div className="quiz-container">
              <QuizDinamico artigoSlug="neurodivergencia-o-que-e-por-que-importa" />
            </div>
          </section>

          <section className="artigos-sugeridos animate__animated" id="artigosSugeridos">
            <h2 className="proposta-title">Continue Explorando</h2>
            <div className="sugeridos-grid">
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
                  Descubra como o TDAH afeta a vida além da impulsividade e hiperatividade.
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
                  src="/imagens/img6.jpg"
                  alt="Mais artigos"
                  loading="lazy"
                />
                <h3>Inclusão Escolar</h3>
                <p>
                  Como criar ambientes educacionais verdadeiramente inclusivos.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigos")}
              >
                <img
                  src="/imagens/img7.jpg"
                  alt="Neurodiversidade no trabalho"
                  loading="lazy"
                />
                <h3>Neurodiversidade no Trabalho</h3>
                <p>Como empresas podem se beneficiar da diversidade cognitiva.</p>
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