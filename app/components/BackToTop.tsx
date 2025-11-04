"use client";

import React, { useEffect, useState } from "react";
import "./BackToTop.css";

export default function BackToTop() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisivel(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visivel ? (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      title="Voltar ao topo"
    >
      ↑
    </button>
  ) : null;
}
