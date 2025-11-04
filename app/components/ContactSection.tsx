"use client";

import React, { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setNome("");
    setEmail("");
    setMensagem("");
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <h2>Fale Conosco</h2>
        <p>Tem alguma dúvida, sugestão ou feedback? Fale com a gente!</p>
        <form onSubmit={handleSubmit} id="contact-form">
          <div className="input-row">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            rows={5}
            required
          ></textarea>
          <button type="submit">Enviar</button>
          {enviado && (
            <span className="mensagem-enviada">Mensagem enviada!</span>
          )}
        </form>
      </div>
    </section>
  );
}
