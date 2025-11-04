"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function InclusaoEscolar() {
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
            src="/imagens/img6.jpg"
            alt="Sala de aula inclusiva"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              Inclusão Escolar: Construindo Pontes para Todos
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 17, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>Educação Inclusiva</span>
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
            <span>Inclusão Escolar</span>
          </div>

          <article className="article-content">
            <p>
              A inclusão escolar vai muito além de apenas colocar estudantes com necessidades especiais na sala de aula regular. É um processo transformador que requer mudanças estruturais, pedagógicas e culturais para garantir que todos os alunos tenham oportunidades equitativas de aprendizado e desenvolvimento.
            </p>

            <img
              src="/imagens/img4.jpg"
              alt="Estudantes diversos trabalhando juntos"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              No Brasil, a Lei Brasileira de Inclusão (LBI) garante o direito à educação inclusiva para pessoas com deficiência. No entanto, a implementação efetiva ainda enfrenta desafios como falta de formação docente, recursos inadequados e barreiras atitudinais que persistem em muitas instituições.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "A educação inclusiva não é sobre tolerância, é sobre pertencimento. Cada criança tem o direito de estar, participar e aprender na comunidade escolar." - Mel Ainscow
              </p>
            </div>

            <p>
              A inclusão beneficia não apenas estudantes com necessidades especiais, mas toda a comunidade escolar. Pesquisas demonstram que ambientes inclusivos promovem empatia, reduzem preconceitos e preparam todos os alunos para uma sociedade diversa, desenvolvendo habilidades sociais e emocionais essenciais.
            </p>

            <img
              src="/imagens/img5.jpg"
              alt="Professor auxiliando aluno"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              A tecnologia assistiva desempenha papel fundamental na inclusão escolar, oferecendo ferramentas que podem eliminar barreiras de comunicação, mobilidade e aprendizagem. Desde aplicativos de comunicação alternativa até softwares de leitura, a tecnologia amplia as possibilidades de participação ativa.
            </p>

            <p>
              O sucesso da inclusão escolar depende de uma abordagem colaborativa envolvendo gestores, professores, famílias, profissionais especializados e os próprios estudantes. É um trabalho em equipe que requer planejamento, recursos adequados e, principalmente, mudança de mentalidade sobre as capacidades humanas.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Inclusão Efetiva</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Formação Docente Continuada</h3>
                <p>
                  Invista em capacitação regular sobre diversidade, metodologias inclusivas e recursos pedagógicos adaptados.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Adaptações Curriculares</h3>
                <p>
                  Desenvolva currículos flexíveis que permitam múltiplas formas de aprendizagem e avaliação personalizada.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Ambiente Físico Acessível</h3>
                <p>
                  Garanta acessibilidade arquitetônica e recursos sensoriais adequados para diferentes necessidades.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Parceria Família-Escola</h3>
                <p>
                  Estabeleça comunicação constante com famílias para alinhar estratégias e acompanhar o desenvolvimento.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">O Futuro da Educação é Inclusivo</h2>
            <div className="conclusao-content">
              <p>
                A inclusão escolar representa uma mudança fundamental na forma como concebemos a educação. Não se trata de adaptar estudantes a um sistema rígido, mas de criar sistemas educacionais flexíveis que celebrem e acomodem a diversidade humana em todas as suas formas.
              </p>

              <p>
                Escolas verdadeiramente inclusivas se tornam laboratórios de inovação pedagógica, onde diferentes necessidades de aprendizagem impulsionam a criação de metodologias mais criativas e eficazes para todos os estudantes.
              </p>

              <div className="highlight-box">
                <p>
                  "Quando removemos barreiras para alguns, criamos oportunidades para todos. A inclusão escolar nos ensina que a diversidade é nossa maior força." - Rosangela Machado
                </p>
              </div>

              <p>
                O investimento em educação inclusiva é um investimento no futuro de uma sociedade mais justa e equitativa. Cada estudante que recebe educação de qualidade em ambiente inclusivo se torna um agente de transformação social, perpetuando valores de respeito, colaboração e valorização da diversidade.
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
                  src="/imagens/img1.jpg"
                  alt="Neurodivergência"
                  loading="lazy"
                />
                <h3>Neurodivergência</h3>
                <p>O que é e por que importa para nossa sociedade.</p>
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
                  Como a tecnologia pode apoiar pessoas neurodivergentes.
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