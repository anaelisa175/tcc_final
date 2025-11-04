'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Position {
  x: number;
  y: number;
}

interface MazeCell {
  isWall: boolean;
  isStart: boolean;
  isEnd: boolean;
  hasLetter: boolean;
  letter: string;
  visited: boolean;
}

interface Word {
  word: string;
  hint: string;
  difficulty: number;
}

const WORDS_BY_LEVEL = {
  1: [
    { word: 'CASA', hint: 'Lugar onde moramos', difficulty: 1 },
    { word: 'GATO', hint: 'Animal doméstico que faz miau', difficulty: 1 },
    { word: 'SOL', hint: 'Ilumina o dia', difficulty: 1 },
    { word: 'FLOR', hint: 'Planta bonita e colorida', difficulty: 1 },
  ],
  2: [
    { word: 'AMIGO', hint: 'Pessoa especial que gostamos', difficulty: 2 },
    { word: 'ESCOLA', hint: 'Lugar onde aprendemos', difficulty: 2 },
    { word: 'FAMILIA', hint: 'Pessoas que nos amam', difficulty: 2 },
    { word: 'BRINCA', hint: 'O que fazemos para nos divertir', difficulty: 2 },
  ],
  3: [
    { word: 'ALEGRIA', hint: 'Sentimento quando estamos felizes', difficulty: 3 },
    { word: 'CORAGEM', hint: 'Força para enfrentar desafios', difficulty: 3 },
    { word: 'APRENDER', hint: 'Descobrir coisas novas', difficulty: 3 },
    { word: 'CARINHO', hint: 'Demonstração de amor', difficulty: 3 },
  ]
};

export default function LabirintoPage() {
  const [maze, setMaze] = useState<MazeCell[][]>([]);
  const [playerPos, setPlayerPos] = useState<Position>({ x: 1, y: 1 });
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [moves, setMoves] = useState(0);

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

  // Generate maze
  const generateMaze = useCallback((size: number, targetWord: string) => {
    const maze: MazeCell[][] = [];
    
    // Initialize maze with walls
    for (let y = 0; y < size; y++) {
      maze[y] = [];
      for (let x = 0; x < size; x++) {
        maze[y][x] = {
          isWall: true,
          isStart: false,
          isEnd: false,
          hasLetter: false,
          letter: '',
          visited: false
        };
      }
    }

    // Create simple path-based maze
    const createPath = (startX: number, startY: number, endX: number, endY: number) => {
      let currentX = startX;
      let currentY = startY;
      
      // Create main path
      while (currentX !== endX || currentY !== endY) {
        maze[currentY][currentX].isWall = false;
        
        if (currentX < endX) currentX++;
        else if (currentX > endX) currentX--;
        else if (currentY < endY) currentY++;
        else if (currentY > endY) currentY--;
      }
      maze[endY][endX].isWall = false;
    };

    // Create paths
    const startX = 1, startY = 1;
    const endX = size - 2, endY = size - 2;
    
    createPath(startX, startY, endX, endY);
    
    // Add some additional paths
    for (let i = 0; i < 3; i++) {
      const randomX = Math.floor(Math.random() * (size - 2)) + 1;
      const randomY = Math.floor(Math.random() * (size - 2)) + 1;
      createPath(startX, startY, randomX, randomY);
    }

    // Set start and end
    maze[startY][startX].isStart = true;
    maze[endY][endX].isEnd = true;

    // Place letters along the path
    const pathCells: Position[] = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (!maze[y][x].isWall && !maze[y][x].isStart && !maze[y][x].isEnd) {
          pathCells.push({ x, y });
        }
      }
    }

    // Shuffle and place letters
    const shuffledLetters = targetWord.split('').sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(shuffledLetters.length, pathCells.length); i++) {
      const cell = pathCells[i];
      maze[cell.y][cell.x].hasLetter = true;
      maze[cell.y][cell.x].letter = shuffledLetters[i];
    }

    return maze;
  }, []);

  // Initialize game
  const initGame = useCallback(() => {
    const words = WORDS_BY_LEVEL[level as keyof typeof WORDS_BY_LEVEL];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    
    const mazeSize = 8 + level * 2; // Increase size with level
    const newMaze = generateMaze(mazeSize, randomWord.word);
    setMaze(newMaze);
    setPlayerPos({ x: 1, y: 1 });
    setCollectedLetters([]);
    setGameComplete(false);
    setTimeElapsed(0);
    setMoves(0);
    setShowHint(false);
  }, [level, generateMaze]);

  // Move player
  const movePlayer = useCallback((direction: string) => {
    if (gameComplete) return;

    const newPos = { ...playerPos };
    switch (direction) {
      case 'up': newPos.y--; break;
      case 'down': newPos.y++; break;
      case 'left': newPos.x--; break;
      case 'right': newPos.x++; break;
    }

    // Check bounds and walls
    if (newPos.y >= 0 && newPos.y < maze.length &&
        newPos.x >= 0 && newPos.x < maze[0].length &&
        !maze[newPos.y][newPos.x].isWall) {
      
      setPlayerPos(newPos);
      setMoves(prev => prev + 1);
      playSound(300, 0.1);

      // Check for letter collection
      const cell = maze[newPos.y][newPos.x];
      if (cell.hasLetter && !collectedLetters.includes(cell.letter)) {
        setCollectedLetters(prev => [...prev, cell.letter]);
        playSound(500, 0.3, 'triangle');
        
        // Update maze to remove collected letter
        const newMaze = [...maze];
        newMaze[newPos.y][newPos.x].hasLetter = false;
        setMaze(newMaze);
      }

      // Check if reached end with all letters
      if (cell.isEnd && currentWord && 
          collectedLetters.length + (cell.hasLetter ? 1 : 0) === currentWord.word.length) {
        setGameComplete(true);
        const levelScore = Math.max(100 - moves * 2 - Math.floor(timeElapsed / 10), 50);
        setScore(prev => prev + levelScore);
        playSound(800, 0.5, 'square');
      }
    }
  }, [playerPos, maze, collectedLetters, currentWord, gameComplete, moves, timeElapsed, playSound]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return;
      
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          movePlayer('up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          movePlayer('down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          movePlayer('left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          movePlayer('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, movePlayer]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameComplete) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  // Initialize game on mount and level change
  useEffect(() => {
    initGame();
  }, [initGame]);

  const startGame = () => {
    setGameStarted(true);
    playSound(400, 0.3);
  };

  const nextLevel = () => {
    if (level < 3) {
      setLevel(prev => prev + 1);
      setGameStarted(false);
    }
  };

  const restartGame = () => {
    setLevel(1);
    setScore(0);
    setGameStarted(false);
    initGame();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            🗺️ Labirinto das Palavras
          </h1>
          <p style={{
            fontSize: '1.2em',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Navegue pelo labirinto coletando letras para formar palavras!
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            padding: '1rem',
            marginBottom: '1rem'
          }}>
            <div><strong>Nível:</strong> {level}</div>
            <div><strong>Pontos:</strong> {score}</div>
            <div><strong>Tempo:</strong> {formatTime(timeElapsed)}</div>
            <div><strong>Movimentos:</strong> {moves}</div>
          </div>
        </div>

        {!gameStarted ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#4a5568', marginBottom: '1rem' }}>
              Nível {level} - Pronto para começar?
            </h2>
            {currentWord && (
              <div style={{
                backgroundColor: '#e6f3ff',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1rem'
              }}>
                <p><strong>Palavra para formar:</strong> {currentWord.word}</p>
                <p><strong>Dica:</strong> {currentWord.hint}</p>
              </div>
            )}
            <button
              onClick={startGame}
              style={{
                fontSize: '1.2em',
                padding: '1rem 2rem',
                backgroundColor: '#48bb78',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#38a169';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#48bb78';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Iniciar Jogo
            </button>
          </div>
        ) : (
          <>
            {currentWord && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f8f9fa',
                padding: '1rem',
                borderRadius: '10px',
                marginBottom: '1rem'
              }}>
                <div>
                  <strong>Formar:</strong> {currentWord.word}
                  <div style={{ marginTop: '0.5rem' }}>
                    <strong>Coletadas:</strong> {collectedLetters.join(' - ')} 
                    ({collectedLetters.length}/{currentWord.word.length})
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#ffd700',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    💡 Dica
                  </button>
                  {showHint && (
                    <div style={{
                      position: 'absolute',
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '0.5rem',
                      borderRadius: '5px',
                      marginTop: '0.5rem',
                      zIndex: 10
                    }}>
                      {currentWord.hint}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${maze[0]?.length || 0}, 25px)`,
              gap: '1px',
              backgroundColor: '#333',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '1rem',
              justifyContent: 'center'
            }}>
              {maze.map((row, y) =>
                row.map((cell, x) => (
                  <div
                    key={`${x}-${y}`}
                    style={{
                      width: '25px',
                      height: '25px',
                      backgroundColor: cell.isWall 
                        ? '#333' 
                        : cell.isStart 
                        ? '#4CAF50' 
                        : cell.isEnd 
                        ? '#FF5722' 
                        : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: cell.hasLetter ? '#e74c3c' : '#333',
                      position: 'relative',
                      border: playerPos.x === x && playerPos.y === y ? '2px solid #007bff' : 'none'
                    }}
                  >
                    {playerPos.x === x && playerPos.y === y ? '😊' :
                     cell.hasLetter ? cell.letter :
                     cell.isStart ? '🏁' :
                     cell.isEnd ? '🎯' : ''}
                  </div>
                ))
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '1rem'
            }}>
              <button onClick={() => movePlayer('up')} style={buttonStyle}>⬆️ Cima</button>
              <button onClick={() => movePlayer('down')} style={buttonStyle}>⬇️ Baixo</button>
              <button onClick={() => movePlayer('left')} style={buttonStyle}>⬅️ Esquerda</button>
              <button onClick={() => movePlayer('right')} style={buttonStyle}>➡️ Direita</button>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.9em', color: '#666' }}>
              Use as setas do teclado ou os botões para se mover
            </div>
          </>
        )}

        {gameComplete && (
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
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <h2 style={{ color: '#48bb78', marginBottom: '1rem' }}>
                🎉 Parabéns! Palavra formada!
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                Você coletou todas as letras de <strong>{currentWord?.word}</strong>
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Tempo: {formatTime(timeElapsed)} | Movimentos: {moves}
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {level < 3 ? (
                  <button onClick={nextLevel} style={{...buttonStyle, backgroundColor: '#48bb78'}}>
                    Próximo Nível
                  </button>
                ) : (
                  <button onClick={restartGame} style={{...buttonStyle, backgroundColor: '#48bb78'}}>
                    Jogar Novamente
                  </button>
                )}
                <Link href="/jogos" style={{...buttonStyle, backgroundColor: '#6c757d', textDecoration: 'none', display: 'inline-block'}}>
                  Voltar aos Jogos
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

const buttonStyle = {
  padding: '0.75rem 1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1em',
  transition: 'all 0.3s ease'
};