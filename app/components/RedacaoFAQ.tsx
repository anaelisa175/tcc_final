"use client";

import React, { useState } from "react";
import "./RedacaoFAQ.css";

const faqs = [
  {
    pergunta: "O que é o Brainwave Connect?",
    resposta:
      "O Brainwave Connect é um espaço de informação, acolhimento e conexão para pessoas com autismo, TDAH e outras condições relacionadas à neurodiversidade. Nosso objetivo é aproximar famílias, profissionais e a comunidade, oferecendo conteúdos confiáveis, práticos e acessíveis."
  },
  {
    pergunta: "O Brainwave Connect faz diagnósticos ou tratamentos? ",
    resposta:
      "Não. O nosso papel é informar e orientar. Sempre indicamos que o diagnóstico e o acompanhamento devem ser feitos por profissionais de saúde especializados."
  },
  {
    pergunta: "Que tipo de conteúdo encontro por aqui?",
    resposta:
      "Você encontrará artigos, guias práticos, informações atualizadas, dicas para o dia a dia e materiais educativos sobre autismo, TDAH e temas relacionados. Nosso foco é traduzir informações complexas em conteúdos claros e úteis."
  },
  {
    pergunta: "Como posso apoiar ou participar?",
    resposta:
      "Você pode compartilhar nossos conteúdos, indicar o Brainwave Connect para outras pessoas e, em breve, poderá se conectar em fóruns e projetos colaborativos que estamos preparando."
  }
];

export default function RedacaoFAQ() {
  const [aberta, setAberta] = useState(null);

  const toggleFAQ = (index) => {
    setAberta(aberta === index ? null : index);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      // Calculando a posição para garantir que toda a seção de contato seja visível
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const headerHeight = 100; // Altura aproximada do header fixo com margem extra

      // Seleciona a seção inteira, não apenas o formulário
      const rect = contactSection.getBoundingClientRect();
      const targetPosition = scrollTop + rect.top - headerHeight + 10; // Ajustado para descer o card um pouco

      // Rolando para a posição calculada
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      // Dando foco ao primeiro campo do formulário após a rolagem
      setTimeout(() => {
        const firstInput = contactSection.querySelector("input");
        if (firstInput) firstInput.focus();
      }, 800);
    }
  };

  return (
    <section className="content-section">
      <div className="container">
        <br></br>
        <h2> Dúvidas Frequentes </h2>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div
              className={`redacao-item${aberta === idx ? " aberta" : ""}`}
              key={idx}
              onClick={() => toggleFAQ(idx)}
              role="button"
              aria-expanded={aberta === idx}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFAQ(idx);
                }
              }}
            >
              <div className="redacao-header">
                <h3>{faq.pergunta}</h3>
                <span className={`arrow${aberta === idx ? " rotate" : ""}`}>
                  ▼
                </span>
              </div>
              <div
                className={`redacao-content${aberta === idx ? " visible" : ""}`}
                aria-hidden={aberta !== idx}
              >
                <p>{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-button-container">
          <a href="#" className="btn-redacao" onClick={scrollToContact}>
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
