"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function NeurodivergenciaCriatividade() {
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
            src="/imagens/img5.jpg"
            alt="Arte e criatividade neurodivergente"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Neurodivergência e Criatividade: Quando Diferenças Geram Inovação
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 20, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Criatividade & Inovação</span>
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
            <span>Neurodivergência e Criatividade</span>
          </div>

          <article className="article-content">
            <p>
              A conexão entre neurodivergência e criatividade é profunda e fascinante. Mentes que processam informações de forma diferente frequentemente geram insights únicos, soluções inovadoras e expressões artísticas extraordinárias. A neurodivergência não é apenas compatível com a criatividade - ela pode ser uma fonte poderosa de inspiração e inovação.
            </p>

            <img
              src="/imagens/img16.jpg"
              alt="Artista neurodivergente criando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Estudos mostram que pessoas com TDAH frequentemente demonstram maior pensamento divergente, capacidade de fazer conexões inusitadas e flexibilidade cognitiva. Pessoas autistas podem trazer perspectivas únicas, atenção extraordinária aos detalhes e capacidade de ver padrões que outros não percebem.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A criatividade requer a coragem de deixar de lado as certezas. Para pessoas neurodivergentes, isso não é coragem - é nossa forma natural de existir." - Dan Siegel
              </p>
            </div>

            <p>
              Grandes inovadores da história, de Einstein a Van Gogh, demonstravam características neurodivergentes. Suas diferenças neurológicas não foram obstáculos para suas conquistas - foram catalisadores de sua genialidade. Eles viam o mundo através de lentes diferentes e isso transformou suas áreas de atuação.
            </p>

            <img
              src="/imagens/img11.jpg"
              alt="Inovação e pensamento diferente"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              A hiperfocusing característica do TDAH pode levar a mergulhos profundos em interesses criativos, resultando em obras de arte, invenções e descobertas extraordinárias. A sistematização autística pode criar arte com padrões complexos e organizações visuais únnicas.
            </p>

            <p>
              Ambientes criativos que abraçam a neurodiversidade tendem a ser mais inovadores. Quando diferentes tipos de mentes colaboram, surge uma sinergia poderosa que pode resolver problemas complexos e gerar ideias revolucionárias que uma mente homogênea nunca alcançaria.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Cultivando a Criatividade Neurodivergente</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Ambientes Flexíveis</h3>
                <p>
                  Crie espaços que acomodem diferentes necessidades sensoriais e permitam múltiplas formas de expressão criativa.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Processos Não-Lineares</h3>
                <p>
                  Permita abordagens criativas que não sigam caminhos tradicionais, valorizando o pensamento divergente e conexões inusitadas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Interesses Especiais como Força</h3>
                <p>
                  Reconheça que paixões intensas podem ser fontes de inovação extraordinária quando canalizadas adequadamente.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Colaboração Neurodiversa</h3>
                <p>
                  Forme equipes que incluam diferentes tipos de mentes para maximizar o potencial criativo e inovador.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">O Futuro da Inovação é Neurodiverso</h2>
            <div className="conclusao-content">
              <p>
                Vivemos em uma era que demanda soluções criativas para problemas complexos. Mudanças climáticas, desigualdade social, avanços tecnológicos - todos requerem pensamento inovador. A neurodivergência oferece perspectivas essenciais para enfrentar esses desafios de formas que mentes convencionais podem não considerar.
              </p>

              <p>
                Empresas e organizações que abraçam a neurodiversidade não estão apenas fazendo o que é certo - estão investindo em vantagem competitiva. A criatividade neurodivergente pode ser a diferença entre soluções incrementais e revoluções transformadoras.
              </p>

              <div className="highlight-box">
                <p>
                  "Minha mente autística me permite ver conexões que outros não veem. Isso não é uma limitação - é meu superpoder criativo." - Temple Grandin
                </p>
              </div>

              <p>
                O futuro pertence àqueles que podem pensar diferente, conectar o inconectável e imaginar o inimaginável. A neurodivergência não é apenas parte desse futuro - ela pode ser a chave para desbloqueá-lo. Quando celebramos e cultivamos a criatividade neurodivergente, todos nós nos beneficiamos de um mundo mais inovador e extraordinário.
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
                  src="/imagens/img9.jpg"
                  alt="TDAH hiperfoco"
                  loading="lazy"
                />
                <h3>TDAH e Hiperfoco</h3>
                <p>
                  Explorando o superpoder da concentração.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigo/tdah-estereotipos-mitos")}
              >
                <img
                  src="/imagens/img2.jpg"
                  alt="TDAH estereótipos"
                  loading="lazy"
                />
                <h3>TDAH: Mitos e Verdades</h3>
                <p>
                  Desmistificando estereótipos sobre TDAH.
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