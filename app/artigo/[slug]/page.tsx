"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

// Mapeamento dos componentes
const componentMap = {
  'NeurodivergenciaArtigo': dynamic(() => import('../../components/NeurodivergenciaArtigo')),
  'TDAHEsterotipos': dynamic(() => import('../../components/TDAHEsterotipos')),
  'AutismoComunicacao': dynamic(() => import('../../components/AutismoComunicacao')),
  'TDAHVidaAdulta': dynamic(() => import('../../components/TDAHVidaAdulta')),
  'AutismoEmprego': dynamic(() => import('../../components/AutismoEmprego')),
  'SensorialidadeAutismo': dynamic(() => import('../../components/SensorialidadeAutismo')),
  'TDAHHiperfoco': dynamic(() => import('../../components/TDAHHiperfoco')),
  'InclusaoEscolar': dynamic(() => import('../../components/InclusaoEscolar')),
  'AnsiedadeNeurodivergencia': dynamic(() => import('../../components/AnsiedadeNeurodivergencia')),
  'TecnologiaNeurodivergentes': dynamic(() => import('../../components/TecnologiaNeurodivergentes')),
  'NeurodivergenciaCriatividade': dynamic(() => import('../../components/NeurodivergenciaCriatividade')),
  'SaudeMentalNeurodivergencia': dynamic(() => import('../../components/SaudeMentalNeurodivergencia')),
  'DislexiaCriatividade': dynamic(() => import('../../components/DislexiaCriatividade')),
  'ArtigoPremium': dynamic(() => import('../../components/ArtigoPremium'))
};

interface Artigo {
  id: number;
  titulo: string;
  slug: string;
  componente: string;
  categoria: string;
  autor: string;
  dataPublicacao: string;
  imagemCapa: string | null;
  descricao: string | null;
}

export default function ArtigoPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [artigo, setArtigo] = useState<Artigo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArtigo() {
      try {
        const response = await fetch(`/api/artigos/${slug}`);
        if (!response.ok) {
          throw new Error('Artigo não encontrado');
        }
        const data = await response.json();
        setArtigo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar artigo');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchArtigo();
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '18px',
        color: '#071D3B'
      }}>
        Carregando artigo...
      </div>
    );
  }

  if (error || !artigo) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '18px',
        color: '#071D3B',
        textAlign: 'center'
      }}>
        <h1>Artigo não encontrado</h1>
        <p>{error || 'O artigo que você procura não existe.'}</p>
        <a href="/" style={{ color: '#F6B600', textDecoration: 'underline' }}>
          Voltar para a página inicial
        </a>
      </div>
    );
  }

  // Buscar o componente correspondente
  const ArtigoComponent = componentMap[artigo.componente as keyof typeof componentMap] || componentMap['ArtigoPremium'];

  return <ArtigoComponent />;
}