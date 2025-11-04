import React from "react";

export default function SearchSection() {
  return (
    <section className="search-section" style={{ marginTop: 0 }}>
      <div className="container">
        <div className="texto-pesquisa">
          <h2>Artigos Disponíveis</h2>
          <p>Mergulhe profundamente em vários temas e encontre um novo artigo toda a semana.</p>
        </div>
        <div className="search-wrapper">
          <div className="input-container">
            <input
              type="text"
              id="searchInput"
              placeholder="Buscar temas..."
            />
            <button type="button" className="search-icon-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}