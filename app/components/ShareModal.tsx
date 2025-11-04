"use client";

import React from "react";
import "./ShareModal.css";

const ShareModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  // Previne que cliques dentro do modal fechem o modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="share-modal" onClick={handleModalClick}>
        <div className="modal-header">
          <h2>Compartilhar Artigo</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="share-options">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn facebook"
            aria-label="Compartilhar no Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn twitter"
            aria-label="Compartilhar no Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              "Confira este artigo interessante: " + window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn whatsapp"
            aria-label="Compartilhar no WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn linkedin"
            aria-label="Compartilhar no LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <button
            onClick={copyLink}
            className="share-btn copy-link"
            aria-label="Copiar link"
          >
            <i className="fas fa-link"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
