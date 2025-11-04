"use client";

import React, { useState, useEffect } from "react";
import "./ThemeList.css";
import { useRouter } from "next/navigation";

interface Artigo {
  id: number;
  titulo: string;
  slug: string;
  descricao: string | null;
  imagemCapa: string | null;
  imagemPrincipal: string | null;
  categoria: string | null;
  premium: boolean;
}

export default function ThemeList() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchArtigos() {
      try {
        const response = await fetch('/api/artigos?limit=15');
        const data = await response.json();
        setArtigos(data.artigos || []);
      } catch (error) {
        console.error('Erro ao carregar artigos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArtigos();
  }, []);

  const artigosVisiveis = mostrarTodos ? artigos : artigos.slice(0, 6);

  const handleVerMais = () => {
    setMostrarTodos(true);
  };

  const handleVerMenos = () => {
    setMostrarTodos(false);
    // Rolagem suave para o topo da seção após ocultar temas
    document
      .querySelector(".temas-populares")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExplorarTema = (artigo: Artigo) => {
    // Todos os artigos agora usam o sistema dinâmico
    const rota = `/artigo/${artigo.slug}`;
    
    router.push(rota);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  if (loading) {
    return (
      <section className="temas-populares">
        <div className="container">
          <h2>Temas Populares</h2>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Carregando artigos...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="temas-populares" id="temas-populares">
      <div className="container">
        <h2>Temas Populares</h2>
        <br></br>
        <div className="temas-grid">
          {artigosVisiveis.map((artigo) => (
            <div className="tema-card" key={artigo.id}>
              <div className="tema-img">
                <img 
                  src={artigo.imagemCapa || artigo.imagemPrincipal || '/imagens/img1.jpg'} 
                  alt={artigo.titulo} 
                />
              </div>
              <div className="tema-content">
                <h3>{artigo.titulo}</h3>
                <p>{artigo.descricao || 'Explore este tema interessante sobre neurodivergência.'}</p>
                <button
                  className="btn-tema"
                  onClick={() => handleExplorarTema(artigo)}
                >
                  Explorar tema
                </button>
              </div>
            </div>
          ))}
        </div>

        {artigos.length > 6 && (
          <div className="botoes-controle">
            {!mostrarTodos ? (
              <a
                href="#"
                className="btn-ver-mais"
                onClick={(e) => {
                  e.preventDefault();
                  handleVerMais();
                }}
              >
                Mostrar mais
              </a>
            ) : (
              <a
                href="#"
                className="btn-ver-menos"
                onClick={(e) => {
                  e.preventDefault();
                  handleVerMenos();
                }}
              >
                Mostrar menos
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
