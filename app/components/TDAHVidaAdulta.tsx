"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function TDAHVidaAdulta() {
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
            src="/imagens/img8.jpg"
            alt="Adulto com TDAH no trabalho"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              TDAH na Vida Adulta: Navegando os Desafios
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 13, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>TDAH Adulto</span>
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
            <span>TDAH na Vida Adulta</span>
          </div>

          <article className="article-content">
            <p>
              O TDAH na vida adulta é uma realidade complexa e frequentemente mal compreendida. Enquanto muito se fala sobre TDAH infantil, milhões de adultos vivem com essa condição neurológica, enfrentando desafios únicos no trabalho, relacionamentos e autocuidado, muitas vezes sem diagnóstico adequado.
            </p>

            <img
              src="/imagens/img11.jpg"
              alt="Adulto concentrado trabalhando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Diferentemente do TDAH infantil, o TDAH adulto pode ser mais sutil. A hiperatividade física diminui, mas a hiperatividade mental permanece. Adultos relatam "mente acelerada", dificuldade para relaxar e uma sensação constante de que deveriam estar fazendo algo mais produtivo.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "O TDAH adulto não tratado não é apenas sobre desatenção - é sobre uma vida inteira de se sentir diferente, mas não saber por quê." - Dr. Russell Barkley
              </p>
            </div>

            <p>
              No ambiente profissional, adultos com TDAH podem enfrentar desafios com gestão de tempo, organização e procrastinação. Paradoxalmente, muitos são altamente criativos e inovadores, mas lutam com tarefas administrativas e rotineiras que são essenciais no mundo corporativo.
            </p>

            <img
              src="/imagens/img15.jpg"
              alt="Estratégias de organização"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              Relacionamentos também podem ser afetados. Dificuldades com atenção plena, impulsividade e regulação emocional podem criar mal-entendidos. No entanto, com compreensão e estratégias adequadas, pessoas com TDAH podem construir relacionamentos profundos e satisfatórios.
            </p>

            <p>
              É importante reconhecer que o TDAH adulto não é uma limitação, mas uma diferença neurológica que requer estratégias específicas. Muitos adultos descobrem que, com o tratamento adequado e autoconhecimento, conseguem não apenas gerenciar seus sintomas, mas aproveitar suas forças únicas.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para o TDAH Adulto</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Sistemas de Organização Personalizados</h3>
                <p>
                  Crie sistemas simples e visuais: agendas coloridas, lembretes no celular e listas de tarefas divididas em etapas pequenas.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Gestão de Energia, não apenas Tempo</h3>
                <p>
                  Identifique seus picos de energia e reserve tarefas importantes para esses momentos. Use técnicas como Pomodoro para manter o foco.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Comunicação Aberta nos Relacionamentos</h3>
                <p>
                  Explique suas necessidades aos parceiros e colegas. Transparência sobre o TDAH pode fortalecer relacionamentos e reduzir mal-entendidos.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Autocuidado Estratégico</h3>
                <p>
                  Priorize sono regular, exercícios físicos e momentos de pausa. O TDAH requer cuidado extra com o bem-estar mental e físico.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">Redefinindo o Sucesso Adulto</h2>
            <div className="conclusao-content">
              <p>
                O sucesso para adultos com TDAH não precisa seguir modelos tradicionais. Muitos encontram realização em carreiras criativas, empreendedorismo ou campos que valorizam inovação e pensamento não-linear. A chave está em encontrar ambientes que alinhem com suas forças naturais.
              </p>

              <p>
                O diagnóstico tardio pode trazer alívio e autocompaixão. Muitos adultos relatam que finalmente entender seu TDAH os liberta de anos de autocrítica e permite que se vejam sob uma luz mais gentil e realista.
              </p>

              <div className="highlight-box">
                <p>
                  "Descobrir meu TDAH aos 35 anos foi como finalmente receber o manual de instruções da minha própria mente." - Pessoa com TDAH
                </p>
              </div>

              <p>
                O futuro para adultos com TDAH é promissor. Com maior conscientização, recursos especializados e comunidades de apoio, nunca foi tão possível viver uma vida plena e autêntica com TDAH. A neurodiversidade está sendo reconhecida como uma vantagem em muitos contextos profissionais e pessoais.
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
                onClick={() => (window.location.href = "/artigo/tdah-hiperfoco-superpoder-concentracao")}
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
                onClick={() => (window.location.href = "/artigo/neurodivergencia-criatividade-diferencas-geram-inovacao")}
              >
                <img
                  src="/imagens/img5.jpg"
                  alt="Criatividade"
                  loading="lazy"
                />
                <h3>Neurodivergência e Criatividade</h3>
                <p>
                  Como a neurodivergência impulsiona a inovação.
                </p>
                <span className="leia-mais">Ler artigo →</span>
              </div>

              <div
                className="artigo-sugerido"
                onClick={() => (window.location.href = "/artigo/tdah-alem-dos-estereotipos")}
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
                onClick={() => (window.location.href = "/artigo/ansiedade-neurodivergencia-navegando-aguas-complexas")}
              >
                <img
                  src="/imagens/img4.jpg"
                  alt="Ansiedade"
                  loading="lazy"
                />
                <h3>Ansiedade e Neurodivergência</h3>
                <p>
                  Navegando águas complexas da saúde mental.
                </p>
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