"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function SensorialidadeAutismo() {
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
            src="/imagens/img7.jpg"
            alt="Representação sensorial no autismo"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Sensorialidade no Autismo: Compreendendo as Diferenças
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 15, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Processamento Sensorial</span>
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
            <span>Sensorialidade no Autismo</span>
          </div>

          <article className="article-content">
            <p>
              O processamento sensorial no autismo é uma das características mais significativas e frequentemente incompreendidas. Pessoas autistas podem experienciar o mundo de forma drasticamente diferente através dos sentidos, seja com hipersensibilidade, hiposensibilidade ou uma combinação complexa de ambas.
            </p>

            <img
              src="/imagens/img12.jpg"
              alt="Criança autista explorando texturas"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Estudos indicam que mais de 90% das pessoas autistas apresentam diferenças no processamento sensorial. Essas diferenças não são "problemas" a serem corrigidos, mas características neurológicas que requerem compreensão e adaptação do ambiente para proporcionar conforto e funcionalidade.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "Para muitas pessoas autistas, o mundo sensorial pode ser intenso demais ou insuficiente. Entender isso é a chave para criar ambientes verdadeiramente inclusivos." - Dra. Carol Kranowitz
              </p>
            </div>

            <p>
              A hipersensibilidade pode tornar sons comuns ensurdecedores, luzes normais ofuscantes, ou texturas cotidianas insuportáveis. Por outro lado, a hiposensibilidade pode fazer com que a pessoa busque estímulos mais intensos para registrar sensações, como pressão profunda, sons altos ou movimentos repetitivos.
            </p>

            <img
              src="/imagens/img13.jpg"
              alt="Ambiente sensorial adaptado"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              É importante reconhecer que as necessidades sensoriais podem variar ao longo do dia e em diferentes contextos. Uma pessoa pode ser hipersensível a ruídos pela manhã, mas necessitar de estímulos sonoros mais intensos à tarde. Essa variabilidade requer flexibilidade e observação cuidadosa.
            </p>

            <p>
              Comportamentos como balançar, girar, bater palmas ou evitar certos tipos de toque são frequentemente estratégias de autorregulação sensorial. Compreender esses comportamentos como necessidades genuínas, não como "manias", é fundamental para o apoio adequado.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias de Apoio Sensorial</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Ambientes Sensoriais Adaptados</h3>
                <p>
                  Crie espaços com iluminação ajustável, controle de ruído e opções de texturas variadas para diferentes necessidades.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Ferramentas de Autorregulação</h3>
                <p>
                  Disponibilize recursos como fones de ouvido, brinquedos fidget, almofadas pesadas e espaços para movimento.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Rotinas Sensoriais</h3>
                <p>
                  Estabeleça momentos específicos para atividades sensoriais, como pausas para movimento ou tempo em ambiente calmo.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Comunicação sobre Necessidades</h3>
                <p>
                  Ensine formas de expressar desconforto sensorial e desenvolva sinais para indicar sobrecarga ou necessidade de pausa.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Celebrando a Diversidade Sensorial</h2>
            <div className="conclusao-content">
              <p>
                As diferenças sensoriais no autismo não são defeitos a serem corrigidos, mas variações naturais da experiência humana. Muitas pessoas autistas desenvolvem habilidades sensoriais extraordinárias, como capacidade excepcional de detectar mudanças sutis no ambiente ou apreciar nuances que outros não percebem.
              </p>

              <p>
                A conscientização sobre necessidades sensoriais beneficia não apenas pessoas autistas, mas toda a sociedade. Ambientes mais inclusivos sensorialmente são mais confortáveis para pessoas com migranas, ansiedade, TDAH e muitas outras condições.
              </p>

              <div className="highlight-box">
                <p>
                  "Quando entendemos e acomodamos as diferenças sensoriais, não estamos apenas ajudando pessoas autistas - estamos criando um mundo mais gentil para todos." - Temple Grandin
                </p>
              </div>

              <p>
                O futuro da inclusão passa pela compreensão de que todos experienciamos o mundo de formas únicas. Respeitar e acomodar essas diferenças é um passo essencial para uma sociedade verdadeiramente inclusiva e acessível para todos.
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
                onClick={() => (window.location.href = "/artigo/autismo-emprego-construindo-oportunidades")}
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
                onClick={() => (window.location.href = "/artigo/inclusao-escolar-construindo-pontes")}
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
                onClick={() => (window.location.href = "/artigo/neurodivergencia-o-que-e-por-que-importa")}
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