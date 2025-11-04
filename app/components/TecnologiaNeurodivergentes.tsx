"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function TecnologiaNeurodivergentes() {
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
            src="/imagens/img12.jpg"
            alt="Tecnologia assistiva para neurodivergentes"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Tecnologia e Neurodivergência: Ferramentas de Empoderamento
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 19, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Tecnologia Assistiva</span>
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
            <span>Tecnologia e Neurodivergência</span>
          </div>

          <article className="article-content">
            <p>
              A tecnologia tem se mostrado uma aliada poderosa para pessoas neurodivergentes, oferecendo ferramentas que podem eliminar barreiras, amplificar capacidades e criar caminhos alternativos para comunicação, aprendizagem e participação social. Desde aplicativos simples até inteligência artificial avançada, a tecnologia está revolucionando a inclusão.
            </p>

            <img
              src="/imagens/img15.jpg"
              alt="Pessoa usando tecnologia assistiva"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Para pessoas autistas, aplicativos de comunicação alternativa e aumentativa (CAA) como Proloquo2Go e PECS digitais têm aberto novos mundos de expressão. Pessoas com TDAH encontram em apps de organização e gamificação ferramentas para gerenciar tempo e tarefas de forma mais eficaz.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A tecnologia não apenas nivela o campo de jogo para pessoas neurodivergentes - ela pode ser o que nos permite brilhar além das limitações impostas pelo mundo neurotípico." - Ari Ne'eman
              </p>
            </div>

            <p>
              A realidade virtual está sendo utilizada para treino de habilidades sociais em ambientes seguros, enquanto a inteligência artificial ajuda a personalizar experiências de aprendizagem. Ferramentas de texto-para-fala e vice-versa removem barreiras de comunicação, e interfaces adaptáveis acomodam diferentes necessidades sensoriais.
            </p>

            <img
              src="/imagens/img13.jpg"
              alt="Interface adaptável para diferentes necessidades"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              O design universal em tecnologia beneficia todos, mas é especialmente transformador para pessoas neurodivergentes. Recursos como controle de velocidade em vídeos, opções de contraste, legendas automáticas e interfaces simplificadas fazem a diferença entre exclusão e participação plena.
            </p>

            <p>
              Além de consumir tecnologia, pessoas neurodivergentes estão criando-a. Muitos desenvolvedores autistas e com TDAH trazem perspectivas únicas para o design de software, criando soluções inovadoras que atendem às suas próprias necessidades e as de suas comunidades.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Ferramentas Tecnológicas Transformadoras</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Aplicativos de Comunicação</h3>
                <p>
                  CAA digital, tradutores de linguagem corporal e sistemas de comunicação por imagens para diferentes necessidades expressivas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Ferramentas de Organização</h3>
                <p>
                  Apps de gerenciamento de tempo, lembretes visuais, calendários adaptativos e sistemas de gamificação para tarefas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Tecnologia Sensorial</h3>
                <p>
                  Fones com cancelamento de ruído, óculos para luz azul, aplicativos de ruído branco e ferramentas de regulação sensorial.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Plataformas de Aprendizagem</h3>
                <p>
                  Sistemas adaptativos de ensino, realidade virtual educacional e interfaces personalizáveis para diferentes estilos de aprendizagem.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">O Futuro Tecnológico Inclusivo</h2>
            <div className="conclusao-content">
              <p>
                Estamos apenas no início de uma revolução tecnológica que promete tornar o mundo mais acessível para pessoas neurodivergentes. Tecnologias emergentes como interfaces cérebro-computador, assistentes de IA personalizados e ambientes virtuais totalmente adaptáveis podem redefinir o que significa ser neurodivergente na sociedade digital.
              </p>

              <p>
                A participação ativa de pessoas neurodivergentes no desenvolvimento tecnológico é crucial. Quando as próprias pessoas que usarão as ferramentas participam de sua criação, o resultado são soluções mais eficazes, intuitivas e verdadeiramente inclusivas.
              </p>

              <div className="highlight-box">
                <p>
                  "A melhor tecnologia assistiva é aquela que não parece assistiva - é apenas boa tecnologia que funciona para todos." - Jutta Treviranus
                </p>
              </div>

              <p>
                O objetivo final não é criar tecnologia especial para pessoas neurodivergentes, mas garantir que toda tecnologia seja projetada de forma inclusiva desde o início. Quando isso acontecer, teremos um mundo digital onde a neurodiversidade é não apenas acomodada, mas celebrada como fonte de inovação e criatividade.
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
                  src="/imagens/img10.jpg"
                  alt="Autismo e emprego"
                  loading="lazy"
                />
                <h3>Autismo e Emprego</h3>
                <p>
                  Construindo oportunidades no mercado de trabalho.
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