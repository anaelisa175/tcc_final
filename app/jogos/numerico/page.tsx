'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Tile {
  value: number;
  position: number;
  isEmpty: boolean;
}

interface GameStats {
  moves: number;
  time: number;
  isComplete: boolean;
  bestTime: number;
  bestMoves: number;
}

export default function NumericoPage() {
  const [gridSize, setGridSize] = useState(3);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [gameStats, setGameStats] = useState<GameStats>({
    moves: 0,
    time: 0,
    isComplete: false,
    bestTime: 0,
    bestMoves: 0
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [difficulty, setDifficulty] = useState<'fácil' | 'médio' | 'difícil'>('fácil');

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

  const playSound = useCallback((frequency: number, duration: number = 0.1, type: OscillatorType = 'sine') => {
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

  // Initialize game
  const initializeGame = useCallback((size: number) => {
    const totalTiles = size * size;
    const newTiles: Tile[] = [];

    // Create ordered tiles
    for (let i = 0; i < totalTiles - 1; i++) {
      newTiles.push({
        value: i + 1,
        position: i,
        isEmpty: false
      });
    }

    // Add empty tile
    newTiles.push({
      value: 0,
      position: totalTiles - 1,
      isEmpty: true
    });

    setTiles(newTiles);
    setGameStats(prev => ({
      ...prev,
      moves: 0,
      time: 0,
      isComplete: false
    }));
  }, []);

  // Shuffle tiles
  const shuffleTiles = useCallback(() => {
    const newTiles = [...tiles];
    const shuffleMoves = difficulty === 'fácil' ? 50 : difficulty === 'médio' ? 100 : 200;

    // Perform valid moves to shuffle
    for (let i = 0; i < shuffleMoves; i++) {
      const emptyIndex = newTiles.findIndex(tile => tile.isEmpty);
      const possibleMoves = getPossibleMoves(emptyIndex, gridSize);
      
      if (possibleMoves.length > 0) {
        const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        // Swap empty tile with random valid neighbor
        [newTiles[emptyIndex], newTiles[randomMove]] = [newTiles[randomMove], newTiles[emptyIndex]];
        newTiles[emptyIndex].position = emptyIndex;
        newTiles[randomMove].position = randomMove;
      }
    }

    setTiles(newTiles);
    setGameStarted(true);
    playSound(400, 0.2);
  }, [tiles, gridSize, difficulty, playSound]);

  // Get possible moves for empty tile
  const getPossibleMoves = (emptyIndex: number, size: number): number[] => {
    const moves: number[] = [];
    const row = Math.floor(emptyIndex / size);
    const col = emptyIndex % size;

    // Up
    if (row > 0) moves.push(emptyIndex - size);
    // Down
    if (row < size - 1) moves.push(emptyIndex + size);
    // Left
    if (col > 0) moves.push(emptyIndex - 1);
    // Right
    if (col < size - 1) moves.push(emptyIndex + 1);

    return moves;
  };

  // Check if game is solved
  const checkWin = useCallback((tilesArray: Tile[]): boolean => {
    for (let i = 0; i < tilesArray.length - 1; i++) {
      if (tilesArray[i].value !== i + 1) {
        return false;
      }
    }
    return tilesArray[tilesArray.length - 1].isEmpty;
  }, []);

  // Move tile
  const moveTile = useCallback((clickedIndex: number) => {
    if (!gameStarted || gameStats.isComplete) return;

    const emptyIndex = tiles.findIndex(tile => tile.isEmpty);
    const possibleMoves = getPossibleMoves(emptyIndex, gridSize);

    if (possibleMoves.includes(clickedIndex)) {
      const newTiles = [...tiles];
      
      // Swap tiles
      [newTiles[emptyIndex], newTiles[clickedIndex]] = [newTiles[clickedIndex], newTiles[emptyIndex]];
      newTiles[emptyIndex].position = emptyIndex;
      newTiles[clickedIndex].position = clickedIndex;

      setTiles(newTiles);
      setGameStats(prev => ({ ...prev, moves: prev.moves + 1 }));
      playSound(300, 0.1);

      // Check if won
      if (checkWin(newTiles)) {
        setGameStats(prev => ({
          ...prev,
          isComplete: true,
          bestTime: prev.bestTime === 0 || prev.time < prev.bestTime ? prev.time : prev.bestTime,
          bestMoves: prev.bestMoves === 0 || prev.moves + 1 < prev.bestMoves ? prev.moves + 1 : prev.bestMoves
        }));
        playSound(600, 0.5, 'triangle');
      }
    } else {
      playSound(150, 0.1, 'sawtooth');
    }
  }, [tiles, gameStarted, gameStats, gridSize, checkWin, playSound]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameStats.isComplete) {
      interval = setInterval(() => {
        setGameStats(prev => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameStats.isComplete]);

  // Initialize on mount and grid size change
  useEffect(() => {
    initializeGame(gridSize);
  }, [gridSize, initializeGame]);

  // Set grid size based on difficulty
  const changeDifficulty = (newDifficulty: typeof difficulty) => {
    setDifficulty(newDifficulty);
    const size = newDifficulty === 'fácil' ? 3 : newDifficulty === 'médio' ? 4 : 5;
    setGridSize(size);
    setGameStarted(false);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const restartGame = () => {
    setGameStarted(false);
    initializeGame(gridSize);
  };

  const getSolvedGrid = () => {
    const solved: Tile[] = [];
    for (let i = 0; i < gridSize * gridSize - 1; i++) {
      solved.push({
        value: i + 1,
        position: i,
        isEmpty: false
      });
    }
    solved.push({
      value: 0,
      position: gridSize * gridSize - 1,
      isEmpty: true
    });
    return solved;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
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
            color: '#d63384',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            🔢 Quebra-Cabeça Numérico
          </h1>
          <p style={{
            fontSize: '1.2em',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Organize os números na sequência correta!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div><strong>Movimentos:</strong> {gameStats.moves}</div>
            <div><strong>Tempo:</strong> {formatTime(gameStats.time)}</div>
            <div><strong>Tamanho:</strong> {gridSize}x{gridSize}</div>
          </div>

          {(gameStats.bestTime > 0 || gameStats.bestMoves > 0) && (
            <div style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '10px',
              padding: '0.75rem',
              marginBottom: '1rem'
            }}>
              <strong>📈 Melhores Recordes:</strong> {formatTime(gameStats.bestTime)} | {gameStats.bestMoves} movimentos
            </div>
          )}
        </div>

        <div style={{
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
            {(['fácil', 'médio', 'difícil'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => changeDifficulty(diff)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: difficulty === diff ? '#d63384' : '#e9ecef',
                  color: difficulty === diff ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1em',
                  textTransform: 'capitalize'
                }}
              >
                {diff} ({diff === 'fácil' ? '3x3' : diff === 'médio' ? '4x4' : '5x5'})
              </button>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {!gameStarted ? (
              <button
                onClick={shuffleTiles}
                style={{
                  fontSize: '1.1em',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
              >
                🎲 Embaralhar e Iniciar
              </button>
            ) : (
              <button
                onClick={restartGame}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ffc107',
                  color: '#333',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                🔄 Reiniciar
              </button>
            )}
            
            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              👁️ {showPreview ? 'Ocultar' : 'Mostrar'} Solução
            </button>
          </div>
        </div>

        {showPreview && (
          <div style={{
            backgroundColor: '#e7f3ff',
            border: '2px solid #b8daff',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#004085' }}>🎯 Solução Final:</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize}, 50px)`,
              gap: '2px',
              justifyContent: 'center',
              backgroundColor: '#333',
              padding: '10px',
              borderRadius: '8px',
              margin: '0 auto',
              width: 'fit-content'
            }}>
              {getSolvedGrid().map((tile, index) => (
                <div
                  key={index}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: tile.isEmpty ? '#333' : '#e7f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                    color: '#004085',
                    borderRadius: '4px'
                  }}
                >
                  {!tile.isEmpty && tile.value}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 80px)`,
          gap: '3px',
          justifyContent: 'center',
          backgroundColor: '#333',
          padding: '15px',
          borderRadius: '15px',
          marginBottom: '2rem'
        }}>
          {tiles.map((tile, index) => (
            <div
              key={index}
              onClick={() => moveTile(index)}
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: tile.isEmpty ? '#333' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8em',
                fontWeight: 'bold',
                color: tile.isEmpty ? 'transparent' : '#d63384',
                cursor: gameStarted && !tile.isEmpty ? 'pointer' : 'default',
                borderRadius: '8px',
                border: tile.isEmpty ? 'none' : '2px solid #e9ecef',
                transition: 'all 0.2s ease',
                boxShadow: tile.isEmpty ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
                userSelect: 'none'
              }}
              onMouseOver={(e) => {
                if (!tile.isEmpty && gameStarted) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseOut={(e) => {
                if (!tile.isEmpty) {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {!tile.isEmpty && tile.value}
            </div>
          ))}
        </div>

        {!gameStarted && (
          <div style={{
            textAlign: 'center',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeaa7',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <p style={{ margin: 0, color: '#856404' }}>
              💡 <strong>Como jogar:</strong> Clique nos números adjacentes ao espaço vazio para movê-los. 
              Organize todos os números em ordem crescente com o espaço vazio no final!
            </p>
          </div>
        )}

        {gameStats.isComplete && (
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
              maxWidth: '400px'
            }}>
              <h2 style={{ color: '#28a745', marginBottom: '1rem' }}>
                🎉 Parabéns! Quebra-cabeça resolvido!
              </h2>
              <div style={{
                backgroundColor: '#d4edda',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '1.5rem'
              }}>
                <p style={{ margin: '0.5rem 0' }}>
                  ⏱️ <strong>Tempo:</strong> {formatTime(gameStats.time)}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  🔄 <strong>Movimentos:</strong> {gameStats.moves}
                </p>
                <p style={{ margin: '0.5rem 0' }}>
                  📏 <strong>Dificuldade:</strong> {gridSize}x{gridSize} ({difficulty})
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={restartGame}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '1em'
                  }}
                >
                  🎮 Jogar Novamente
                </button>
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