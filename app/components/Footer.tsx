import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="brainwave-title">BrainWave Connect</h3>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i> Sobre nós</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Blog</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Carreiras</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>RECURSOS</h3>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i> Artigos</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Planos</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Materiais Gratuitos</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>COMUNIDADE</h3>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i> Fóruns</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Eventos</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Depoimentos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>REDES SOCIAIS</h3>
            <ul>
              <li><a href="#"><i className="fas fa-angle-right"></i> Facebook</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> Instagram</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> YouTube</a></li>
              <li><a href="#"><i className="fas fa-angle-right"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/imagens/BRAINHEALT.png" alt="BrainWave Connect" />
            <span className="brainwave-name">BrainWave Connect</span>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} <span className="copyright-name">BrainWave Connect</span>. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#">Política de Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}