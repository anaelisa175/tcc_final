'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface ColorClue {
  color: string;
  name: string;
  hex: string;
  description: string;
}

interface Mystery {
  id: number;
  title: string;
  story: string;
  targetColors: ColorClue[];
  distractorColors: ColorClue[];
  solution: string;
  hint: string;
}

const COLOR_DATABASE: ColorClue[] = [
  { color: '#FF0000', name: 'Vermelho', hex: '#FF0000', description: 'Cor do fogo e do amor' },
  { color: '#00FF00', name: 'Verde', hex: '#00FF00', description: 'Cor da natureza e das plantas' },
  { color: '#0000FF', name: 'Azul', hex: '#0000FF', description: 'Cor do céu e do mar' },
  { color: '#FFFF00', name: 'Amarelo', hex: '#FFFF00', description: 'Cor do sol e dos girassóis' },
  { color: '#FF69B4', name: 'Rosa', hex: '#FF69B4', description: 'Cor delicada e feminina' },
  { color: '#800080', name: 'Roxo', hex: '#800080', description: 'Cor misteriosa e mágica' },
  { color: '#FFA500', name: 'Laranja', hex: '#FFA500', description: 'Cor da laranja e do outono' },
  { color: '#A52A2A', name: 'Marrom', hex: '#A52A2A', description: 'Cor da terra e das árvores' },
  { color: '#000000', name: 'Preto', hex: '#000000', description: 'Cor da noite e das sombras' },
  { color: '#FFFFFF', name: 'Branco', hex: '#FFFFFF', description: 'Cor da neve e das nuvens' },
  { color: '#FFB6C1', name: 'Rosa Claro', hex: '#FFB6C1', description: 'Cor suave como algodão doce' },
  { color: '#90EE90', name: 'Verde Claro', hex: '#90EE90', description: 'Cor das folhas novas' },
  { color: '#87CEEB', name: 'Azul Claro', hex: '#87CEEB', description: 'Cor do céu em dia limpo' },
  { color: '#DDA0DD', name: 'Lilás', hex: '#DDA0DD', description: 'Cor das flores de lavanda' },
  { color: '#20B2AA', name: 'Turquesa', hex: '#20B2AA', description: 'Cor do mar tropical' },
  { color: '#FF6347', name: 'Vermelho Tomate', hex: '#FF6347', description: 'Cor do tomate maduro' }
];

const MYSTERIES_BY_LEVEL = {
  1: [
    {
      id: 1,
      title: "O Mistério da Flor Perdida",
      story: "A fadinha perdeu sua flor mágica no jardim! Ela lembra que a flor tinha as cores do sol e do céu. Ajude-a a encontrar!",
      targetColors: [
        COLOR_DATABASE.find(c => c.name === 'Amarelo')!,
        COLOR_DATABASE.find(c => c.name === 'Azul')!
      ],
      distractorColors: [
        COLOR_DATABASE.find(c => c.name === 'Vermelho')!,
        COLOR_DATABASE.find(c => c.name === 'Verde')!
      ],
      solution: "Amarelo + Azul = Flor mágica encontrada!",
      hint: "Pense no que brilha no céu durante o dia..."
    },
    {
      id: 2,
      title: "O Tesouro do Arco-íris",
      story: "O duende escondeu seu tesouro seguindo as cores do arco-íris! Ele deixou pistas: a cor do fogo e a cor da grama.",
      targetColors: [
        COLOR_DATABASE.find(c => c.name === 'Vermelho')!,
        COLOR_DATABASE.find(c => c.name === 'Verde')!
      ],
      distractorColors: [
        COLOR_DATABASE.find(c => c.name === 'Rosa')!,
        COLOR_DATABASE.find(c => c.name === 'Roxo')!
      ],
      solution: "Vermelho + Verde = Tesouro encontrado!",
      hint: "Uma é quente como fogo, outra é fresca como grama..."
    }
  ],
  2: [
    {
      id: 3,
      title: "A Receita Mágica da Bruxa",
      story: "A bruxa boa precisa de ingredientes coloridos para sua poção de felicidade! Ela precisa da cor do chocolate e da cor das nuvens.",
      targetColors: [
        COLOR_DATABASE.find(c => c.name === 'Marrom')!,
        COLOR_DATABASE.find(c => c.name === 'Branco')!
      ],
      distractorColors: [
        COLOR_DATABASE.find(c => c.name === 'Preto')!,
        COLOR_DATABASE.find(c => c.name === 'Amarelo')!,
        COLOR_DATABASE.find(c => c.name === 'Roxo')!
      ],
      solution: "Marrom + Branco = Poção de felicidade completa!",
      hint: "Uma cor doce que comemos, outra pura como neve..."
    },
    {
      id: 4,
      title: "O Jardim Secreto do Unicórnio",
      story: "O unicórnio criou um jardim secreto com flores especiais! As cores são: a cor do algodão doce, a cor das folhas novas e a cor do mar tropical.",
      targetColors: [
        COLOR_DATABASE.find(c => c.name === 'Rosa Claro')!,
        COLOR_DATABASE.find(c => c.name === 'Verde Claro')!,
        COLOR_DATABASE.find(c => c.name === 'Turquesa')!
      ],
      distractorColors: [
        COLOR_DATABASE.find(c => c.name === 'Vermelho')!,
        COLOR_DATABASE.find(c => c.name === 'Azul')!
      ],
      solution: "Rosa Claro + Verde Claro + Turquesa = Jardim mágico revelado!",
      hint: "Três cores suaves como um sonho..."
    }
  ],
  3: [
    {
      id: 5,
      title: "O Castelo das Quatro Torres",
      story: "O rei colorido construiu um castelo com quatro torres, cada uma com uma cor especial: a cor da realeza, a cor do pôr do sol, a cor da esperança e a cor da paixão.",
      targetColors: [
        COLOR_DATABASE.find(c => c.name === 'Roxo')!,
        COLOR_DATABASE.find(c => c.name === 'Laranja')!,
        COLOR_DATABASE.find(c => c.name === 'Verde')!,
        COLOR_DATABASE.find(c => c.name === 'Vermelho')!
      ],
      distractorColors: [
        COLOR_DATABASE.find(c => c.name === 'Rosa')!,
        COLOR_DATABASE.find(c => c.name === 'Amarelo')!
      ],
      solution: "Roxo + Laranja + Verde + Vermelho = Castelo completo!",
      hint: "Realeza, pôr do sol, natureza e amor..."
    }
  ]
};

export default function CoresPage() {
  const [level, setLevel] = useState(1);
  const [currentMystery, setCurrentMystery] = useState<Mystery | null>(null);
  const [selectedColors, setSelectedColors] = useState<ColorClue[]>([]);
  const [availableColors, setAvailableColors] = useState<ColorClue[]>([]);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'solved'>('menu');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Audio context for sound effects
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const initAudio = () => {
      if (typeof window !== 'undefined') {
        try {
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          setAudioContext(ctx);
        } catch (error) {
          console.log('Audio not supported');
        }
      }
    };
    initAudio();
  }, []);

  const playSound = useCallback((frequency: number, duration: number = 0.2, type: OscillatorType = 'sine') => {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }, [audioContext]);

  // Initialize mystery
  const initMystery = useCallback(() => {
    const mysteries = MYSTERIES_BY_LEVEL[level as keyof typeof MYSTERIES_BY_LEVEL];
    const randomMystery = mysteries[Math.floor(Math.random() * mysteries.length)];
    setCurrentMystery(randomMystery);
    
    // Mix target and distractor colors
    const allColors = [...randomMystery.targetColors, ...randomMystery.distractorColors];
    setAvailableColors(allColors.sort(() => Math.random() - 0.5));
    setSelectedColors([]);
    setGameState('playing');
    setAttempts(0);
    setTimeElapsed(0);
    setShowHint(false);
  }, [level]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  // Select color
  const selectColor = useCallback((color: ColorClue) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(prev => prev.filter(c => c !== color));
      playSound(200, 0.1);
    } else {
      setSelectedColors(prev => [...prev, color]);
      playSound(400, 0.1);
    }
  }, [selectedColors, playSound]);

  // Check solution
  const checkSolution = useCallback(() => {
    if (!currentMystery) return;

    setAttempts(prev => prev + 1);

    const isCorrect = currentMystery.targetColors.every(target => 
      selectedColors.some(selected => selected.name === target.name)
    ) && selectedColors.every(selected => 
      currentMystery.targetColors.some(target => target.name === selected.name)
    );

    if (isCorrect) {
      setGameState('solved');
      const levelScore = Math.max(100 - attempts * 10 - Math.floor(timeElapsed / 5), 50);
      setScore(prev => prev + levelScore);
      playSound(600, 0.5, 'triangle');
    } else {
      playSound(150, 0.3, 'sawtooth');
      // Add shake animation or visual feedback here if needed
    }
  }, [currentMystery, selectedColors, attempts, timeElapsed, playSound]);

  const nextLevel = () => {
    if (level < 3) {
      setLevel(prev => prev + 1);
      setGameState('menu');
    } else {
      setGameState('menu');
    }
  };

  const restartGame = () => {
    setLevel(1);
    setScore(0);
    setGameState('menu');
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyName = (level: number): string => {
    switch(level) {
      case 1: return 'Detetive Iniciante';
      case 2: return 'Detetive Experiente';
      case 3: return 'Super Detetive';
      default: return 'Detetive';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2.5em',
            color: '#4a5568',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            🎨 Detetive de Cores
          </h1>
          <p style={{
            fontSize: '1.2em',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Resolva mistérios coloridos identificando as cores certas!
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div><strong>Nível:</strong> {level} - {getDifficultyName(level)}</div>
            <div><strong>Pontos:</strong> {score}</div>
            {gameState === 'playing' && (
              <>
                <div><strong>Tempo:</strong> {formatTime(timeElapsed)}</div>
                <div><strong>Tentativas:</strong> {attempts}</div>
              </>
            )}
          </div>
        </div>

        {gameState === 'menu' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#4a5568', marginBottom: '1rem' }}>
              Escolha sua missão de detetive:
            </h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              {[1, 2, 3].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  style={{
                    padding: '1rem 1.5rem',
                    backgroundColor: level === lvl ? '#e74c3c' : '#ecf0f1',
                    color: level === lvl ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '1em',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Nível {lvl}<br/>
                  <small>{getDifficultyName(lvl)}</small>
                </button>
              ))}
            </div>
            <button
              onClick={initMystery}
              style={{
                fontSize: '1.2em',
                padding: '1rem 2rem',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            >
              🔍 Começar Investigação
            </button>
          </div>
        )}

        {gameState === 'playing' && currentMystery && (
          <>
            <div style={{
              backgroundColor: '#e8f4fd',
              border: '2px solid #3498db',
              borderRadius: '15px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#2980b9', marginBottom: '1rem' }}>
                🕵️ {currentMystery.title}
              </h3>
              <p style={{ 
                fontSize: '1.1em', 
                lineHeight: '1.6',
                color: '#34495e',
                marginBottom: '1rem'
              }}>
                {currentMystery.story}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <strong>Cores necessárias:</strong> {currentMystery.targetColors.length}
                </div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f39c12',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  💡 {showHint ? 'Esconder' : 'Mostrar'} Dica
                </button>
              </div>
              {showHint && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: '8px',
                  color: '#856404'
                }}>
                  <strong>💭 Dica:</strong> {currentMystery.hint}
                </div>
              )}
            </div>

            <div style={{
              marginBottom: '2rem'
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#4a5568' }}>
                🎯 Cores Selecionadas ({selectedColors.length}/{currentMystery.targetColors.length}):
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                minHeight: '60px',
                backgroundColor: '#f8f9fa',
                border: '2px dashed #dee2e6',
                borderRadius: '10px',
                padding: '1rem',
                alignItems: 'center'
              }}>
                {selectedColors.length === 0 ? (
                  <p style={{ color: '#6c757d', fontStyle: 'italic', margin: 0 }}>
                    Clique nas cores abaixo para selecioná-las...
                  </p>
                ) : (
                  selectedColors.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: color.color,
                        color: ['#FFFFFF', '#FFFF00', '#FFB6C1', '#90EE90', '#87CEEB'].includes(color.color) ? '#333' : '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9em',
                        fontWeight: 'bold',
                        border: '2px solid #fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    >
                      {color.name}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div style={{
              marginBottom: '2rem'
            }}>
              <h4 style={{ marginBottom: '1rem', color: '#4a5568' }}>
                🌈 Cores Disponíveis:
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem'
              }}>
                {availableColors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => selectColor(color)}
                    style={{
                      backgroundColor: color.color,
                      color: ['#FFFFFF', '#FFFF00', '#FFB6C1', '#90EE90', '#87CEEB'].includes(color.color) ? '#333' : '#fff',
                      padding: '1rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      border: selectedColors.includes(color) ? '3px solid #333' : '2px solid #fff',
                      boxShadow: selectedColors.includes(color) 
                        ? '0 4px 12px rgba(0,0,0,0.3)' 
                        : '0 2px 6px rgba(0,0,0,0.1)',
                      transform: selectedColors.includes(color) ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontSize: '1em', marginBottom: '0.25rem' }}>
                      {color.name}
                    </div>
                    <div style={{ fontSize: '0.7em', opacity: 0.8 }}>
                      {color.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              textAlign: 'center'
            }}>
              <button
                onClick={checkSolution}
                disabled={selectedColors.length !== currentMystery.targetColors.length}
                style={{
                  fontSize: '1.2em',
                  padding: '1rem 2rem',
                  backgroundColor: selectedColors.length === currentMystery.targetColors.length ? '#27ae60' : '#95a5a6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: selectedColors.length === currentMystery.targetColors.length ? 'pointer' : 'not-allowed',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                🔍 Resolver Mistério
              </button>
            </div>
          </>
        )}

        {gameState === 'solved' && currentMystery && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              maxWidth: '500px'
            }}>
              <h2 style={{ color: '#27ae60', marginBottom: '1rem' }}>
                🎉 Mistério Resolvido!
              </h2>
              <p style={{ fontSize: '1.1em', marginBottom: '1rem' }}>
                {currentMystery.solution}
              </p>
              <div style={{
                backgroundColor: '#d4edda',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <p style={{ margin: '0.5rem 0' }}>
                  ⏱️ <strong>Tempo:</strong> {formatTime(timeElapsed)}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  🎯 <strong>Tentativas:</strong> {attempts}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  🏆 <strong>Pontos ganhos:</strong> {Math.max(100 - attempts * 10 - Math.floor(timeElapsed / 5), 50)}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {level < 3 ? (
                  <button
                    onClick={nextLevel}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '1em'
                    }}
                  >
                    🔍 Próximo Nível
                  </button>
                ) : (
                  <button
                    onClick={restartGame}
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '1em'
                    }}
                  >
                    🎮 Jogar Novamente
                  </button>
                )}
                <Link
                  href="/jogos"
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    fontSize: '1em'
                  }}
                >
                  🏠 Voltar aos Jogos
                </Link>
              </div>
            </div>
          </div>
        )}

        <div style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <Link
            href="/jogos"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'background-color 0.3s ease'
            }}
          >
            ← Voltar aos Jogos
          </Link>
        </div>
      </div>
    </div>
  );
}