"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Quiz";
import ShareModal from "./ShareModal";
import "./ArtigoPremium.css";

export default function TDAHHiperfoco() {
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
            src="/imagens/img9.jpg"
            alt="Pessoa em estado de hiperfoco"
            className="hero-bg"
            loading="lazy"
          />

          <div className="hero-content animate__animated animate__fadeIn">
            <h1 className="hero-title">
              TDAH e Hiperfoco: Explorando o Superpoder da Concentração
            </h1>

            <div className="hero-meta">
              <div className="meta-item">
                <i className="meta-icon">📅</i>
                <span>Outubro 16, 2025</span>
              </div>
              <div className="meta-item">
                <i className="meta-icon">🔖</i>
                <span>TDAH & Concentração</span>
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
            <span>TDAH e Hiperfoco</span>
          </div>

          <article className="article-content">
            <p>
              O hiperfoco é um dos aspectos mais fascinantes e mal compreendidos do TDAH. Enquanto muitas pessoas associam o TDAH apenas à dificuldade de concentração, o hiperfoco representa o extremo oposto: uma capacidade extraordinária de concentração intensa e prolongada em atividades de interesse.
            </p>

            <img
              src="/imagens/img11.jpg"
              alt="Pessoa concentrada trabalhando"
              className="animate__animated"
              id="articleImage1"
              loading="lazy"
            />

            <p>
              Durante episódios de hiperfoco, pessoas com TDAH podem trabalhar por horas sem perceber o tempo passar, ignorando fome, sede e até mesmo necessidades básicas. Esta concentração laser pode resultar em produtividade excepcional e insights criativos únicos.
            </p>

            <div className="highlight-box animate__animated" id="highlightBox">
              <p>
                "O hiperfoco não é um bug do TDAH, é uma feature. É como ter um superpoder que precisa ser compreendido e canalizado adequadamente." - Dr. Edward Hallowell
              </p>
            </div>

            <p>
              O hiperfoco é ativado por fatores como interesse genuíno, novidade, urgência ou desafio pessoal. Ele funciona como um mecanismo neurológico onde o cérebro com TDAH encontra algo que efetivamente estimula os neurotransmissores da atenção, criando um estado de fluxo intenso.
            </p>

            <img
              src="/imagens/img16.jpg"
              alt="Criatividade e concentração"
              className="animate__animated"
              id="articleImage2"
              loading="lazy"
            />

            <p>
              Embora possa ser uma força poderosa para criatividade e produtividade, o hiperfoco também apresenta desafios. Pode dificultar a transição entre tarefas, causar negligência de responsabilidades importantes e criar desequilíbrio entre diferentes áreas da vida.
            </p>

            <p>
              A chave está em aprender a reconhecer os padrões do hiperfoco e desenvolver estratégias para aproveitá-lo produtivamente, mantendo um equilíbrio saudável. Isso inclui estabelecer lembretes externos, criar estruturas de apoio e honrar tanto os períodos de concentração intensa quanto as necessidades básicas.
            </p>
          </article>

          <section className="proposta-section animate__animated" id="propostaSection">
            <h2 className="proposta-title">Estratégias para Gerenciar o Hiperfoco</h2>
            <div className="curiosidades-list">
              <div className="curiosidade-item">
                <h3>1. Sistemas de Alerta</h3>
                <p>
                  Use alarmes regulares para lembrar de necessidades básicas como comer, beber água e fazer pausas durante o hiperfoco.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>2. Planejamento Estratégico</h3>
                <p>
                  Agende períodos de hiperfoco para tarefas importantes e evite começar atividades intensas quando há compromissos próximos.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>3. Transições Suaves</h3>
                <p>
                  Crie rituais de transição e avisos antecipados para sair do hiperfoco de forma menos abrupta e estressante.
                </p>
              </div>

              <div className="curiosidade-item">
                <h3>4. Canalização Produtiva</h3>
                <p>
                  Identifique seus gatilhos de hiperfoco e aprenda a direcioná-lo para projetos e objetivos significativos.
                </p>
              </div>
            </div>
          </section>

          <section className="conclusao-section animate__animated">
            <h2 className="proposta-title">O Poder Oculto do TDAH</h2>
            <div className="conclusao-content">
              <p>
                O hiperfoco demonstra que o TDAH não é simplesmente uma deficiência de atenção, mas uma diferença neurológica complexa que inclui capacidades extraordinárias. Muitos grandes inovadores, artistas e empreendedores relatam usar o hiperfoco como ferramenta para realizações excepcionais.
              </p>

              <p>
                Compreender e abraçar o hiperfoco como parte integral da experiência TDAH pode transformar a narrativa de "déficit" para "diferença". É uma oportunidade de reconhecer que mentes neurodivergentes operam de formas únicas e valiosas.
              </p>

              <div className="highlight-box">
                <p>
                  "Meu hiperfoco me permitiu mergulhar tão profundamente em projetos que descobri soluções que outros não viam. É meu superpoder secreto." - Pessoa com TDAH, programadora
                </p>
              </div>

              <p>
                O futuro da compreensão do TDAH passa por reconhecer não apenas os desafios, mas também as capacidades únicas. O hiperfoco é um lembrete poderoso de que diferenças neurológicas podem ser fontes de força, criatividade e inovação extraordinárias.
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
                  src="/imagens/img8.jpg"
                  alt="TDAH na vida adulta"
                  loading="lazy"
                />
                <h3>TDAH na Vida Adulta</h3>
                <p>
                  Navegando os desafios do TDAH adulto.
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