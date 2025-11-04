'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  ageGroup: string;
  icon: string;
  benefits: string[];
  link: string;
  tags: string[];
  estimatedTime: string;
}

const games: Game[] = [
  {
    id: 'memoria',
    title: 'Jogo da Memória Emocional',
    description: 'Desenvolva a memória visual e reconhecimento emocional através de cartas temáticas. Perfeito para trabalhar inteligência emocional e concentração.',
    category: 'Memória',
    difficulty: 'Fácil',
    ageGroup: '4-12 anos',
    icon: '🧠',
    benefits: ['Melhora a concentração', 'Desenvolve memória visual', 'Reconhecimento emocional', 'Autocontrole'],
    link: '/jogos/memoria',
    tags: ['emoções', 'concentração', 'visual'],
    estimatedTime: '10-15 min'
  },
  {
    id: 'forca',
    title: 'Palavra Secreta',
    description: 'Expanda seu vocabulário de forma divertida e educativa. Com categorias por idade e sistema de dicas inteligente.',
    category: 'Linguagem',
    difficulty: 'Médio',
    ageGroup: '6-14 anos',
    icon: '📝',
    benefits: ['Expande vocabulário', 'Melhora ortografia', 'Desenvolve raciocínio', 'Pensamento estratégico'],
    link: '/jogos/forca',
    tags: ['palavras', 'vocabulário', 'estratégia'],
    estimatedTime: '5-10 min'
  },
  {
    id: 'quebra-cabeca',
    title: 'Quebra-Cabeça Deslizante',
    description: 'Resolva desafios de lógica espacial com múltiplos temas e níveis. Desenvolve planejamento e persistência.',
    category: 'Lógica',
    difficulty: 'Difícil',
    ageGroup: '8+ anos',
    icon: '🧩',
    benefits: ['Desenvolve lógica espacial', 'Melhora coordenação', 'Estimula persistência', 'Planejamento estratégico'],
    link: '/jogos/quebra-cabeca',
    tags: ['lógica', 'espacial', 'estratégia'],
    estimatedTime: '15-30 min'
  }
];

const categories = [
  { id: 'Todos', name: 'Todos os Jogos', icon: '🎮' },
  { id: 'Memória', name: 'Memória', icon: '🧠' },
  { id: 'Linguagem', name: 'Linguagem', icon: '📝' },
  { id: 'Lógica', name: 'Lógica', icon: '🧩' }
];

export default function JogosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todas');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('Todas');
  const [gameStats, setGameStats] = useState({
    totalGames: 3,
    gamesPlayed: 0,
    averageScore: 0
  });

  useEffect(() => {
    // Carregar estatísticas dos jogos do localStorage
    const memoriaRecord = localStorage.getItem('memoriaRecord');
    const forcaRecord = localStorage.getItem('forcaRecord');
    const quebracabecaRecord = localStorage.getItem('quebracabecaRecord');

    let gamesPlayed = 0;
    let totalScore = 0;

    if (memoriaRecord) {
      gamesPlayed++;
      const record = JSON.parse(memoriaRecord);
      totalScore += record.score || 0;
    }
    if (forcaRecord) {
      gamesPlayed++;
      // Para forca, usar vitórias como pontuação
      totalScore += 85;
    }
    if (quebracabecaRecord) {
      gamesPlayed++;
      totalScore += 90;
    }

    setGameStats({
      totalGames: 3,
      gamesPlayed,
      averageScore: gamesPlayed > 0 ? Math.round(totalScore / gamesPlayed) : 0
    });
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Todos' || game.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'Todas' || game.difficulty === selectedDifficulty;
      const matchesAgeGroup = selectedAgeGroup === 'Todas' || 
                             game.ageGroup.toLowerCase().includes(selectedAgeGroup.toLowerCase().replace(' anos', ''));
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesAgeGroup;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty, selectedAgeGroup]);

  const getDifficultyDots = (difficulty: string) => {
    const levels = { 'Fácil': 1, 'Médio': 2, 'Difícil': 3 };
    const level = levels[difficulty as keyof typeof levels] || 1;
    
    return Array.from({ length: 3 }, (_, i) => (
      <div
        key={i}
        className={`jogos-card-difficulty-dot ${i < level ? 'active' : ''}`}
      />
    ));
  };

  return (
    <div className="jogos-container">
      <Header />
      
      {/* Hero Section */}
      <section className="jogos-hero">
        <h1>Jogos Educativos BrainWave</h1>
        <p className="jogos-hero-subtitle">
          Descubra uma coleção especialmente desenvolvida de jogos educativos para apoiar o 
          desenvolvimento cognitivo, emocional e social de crianças neurodivergentes através 
          de experiências lúdicas e inclusivas.
        </p>
        
        <div className="jogos-stats">
          <div className="jogos-stat">
            <span className="jogos-stat-number">{gameStats.totalGames}</span>
            <span className="jogos-stat-label">Jogos Disponíveis</span>
          </div>
          <div className="jogos-stat">
            <span className="jogos-stat-number">{gameStats.gamesPlayed}</span>
            <span className="jogos-stat-label">Jogos Experimentados</span>
          </div>
          <div className="jogos-stat">
            <span className="jogos-stat-number">{gameStats.averageScore}%</span>
            <span className="jogos-stat-label">Progresso Médio</span>
          </div>
        </div>
      </section>

      <main className="jogos-main">
        {/* Filtros */}
        <section className="jogos-filters">
          <div className="jogos-search">
            <div className="jogos-search-icon">🔍</div>
            <input
              type="text"
              placeholder="Buscar por nome, categoria ou benefício..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="jogos-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`jogos-category ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="jogos-category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="jogos-additional-filters">
            <select
              className="jogos-filter-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="Todas">Todas as Dificuldades</option>
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>

            <select
              className="jogos-filter-select"
              value={selectedAgeGroup}
              onChange={(e) => setSelectedAgeGroup(e.target.value)}
            >
              <option value="Todas">Todas as Idades</option>
              <option value="4-6">4-6 anos</option>
              <option value="7-9">7-9 anos</option>
              <option value="10-12">10-12 anos</option>
              <option value="13+">13+ anos</option>
            </select>
          </div>
        </section>

        {/* Grid de Jogos */}
        <section className="jogos-grid">
          {filteredGames.map(game => (
            <div key={game.id} className="jogos-card">
              <div className="jogos-card-image">
                <span style={{ fontSize: '4rem', color: '#071D3B' }}>
                  {game.icon}
                </span>
              </div>
              
              <div className="jogos-card-content">
                <h3 className="jogos-card-title">{game.title}</h3>
                <p className="jogos-card-description">{game.description}</p>
                
                <div className="jogos-card-tags">
                  {game.tags.map((tag, index) => (
                    <span key={index} className="jogos-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="jogos-card-meta">
                  <span className="jogos-card-age">{game.ageGroup}</span>
                  <div className="jogos-card-difficulty">
                    <span>Dificuldade:</span>
                    <div className="jogos-card-difficulty-dots">
                      {getDifficultyDots(game.difficulty)}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  <span>⏱️ {game.estimatedTime}</span>
                  <span>📊 {game.category}</span>
                </div>
                
                <a href={game.link} className="jogos-card-button">
                  Jogar Agora
                </a>
              </div>
            </div>
          ))}
        </section>

        {filteredGames.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem', 
            color: 'rgba(255, 255, 255, 0.8)',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(246, 182, 0, 0.2)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
            <h3 style={{ color: '#F6B600', marginBottom: '0.5rem' }}>
              Nenhum jogo encontrado
            </h3>
            <p style={{ fontSize: '1.1rem' }}>
              Tente ajustar os filtros para encontrar jogos que atendam aos seus critérios.
            </p>
          </div>
        )}

        {/* Seção de Benefícios */}
        <section className="jogos-benefits">
          <h2>Por Que Nossos Jogos São Especiais?</h2>
          <div className="jogos-benefits-grid">
            <div className="jogos-benefit">
              <div className="jogos-benefit-icon">🎯</div>
              <h3 className="jogos-benefit-title">Desenvolvidos para Neurodiversidade</h3>
              <p className="jogos-benefit-description">
                Cada jogo é cuidadosamente projetado considerando as necessidades específicas 
                de crianças neurodivergentes, com interfaces claras e mecânicas inclusivas.
              </p>
            </div>
            <div className="jogos-benefit">
              <div className="jogos-benefit-icon">🧠</div>
              <h3 className="jogos-benefit-title">Base Científica</h3>
              <p className="jogos-benefit-description">
                Fundamentados em pesquisas sobre desenvolvimento cognitivo e neuroplasticidade, 
                nossos jogos promovem crescimento real e mensurável.
              </p>
            </div>
            <div className="jogos-benefit">
              <div className="jogos-benefit-icon">🎨</div>
              <h3 className="jogos-benefit-title">Design Sensorial Adaptado</h3>
              <p className="jogos-benefit-description">
                Cores, sons e animações cuidadosamente escolhidas para não sobrecarregar 
                sensorialmente, proporcionando uma experiência confortável e envolvente.
              </p>
            </div>
            <div className="jogos-benefit">
              <div className="jogos-benefit-icon">📈</div>
              <h3 className="jogos-benefit-title">Progresso Personalizado</h3>
              <p className="jogos-benefit-description">
                Sistema de acompanhamento que permite monitorar o desenvolvimento e adaptar 
                a dificuldade conforme o progresso de cada criança.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}