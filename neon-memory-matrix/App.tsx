import React, { useState } from 'react';
import { Screen, ScoreData } from './types';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { GameOverScreen } from './components/GameOverScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.START);
  const [lastScore, setLastScore] = useState<ScoreData>({ points: 0, level: 1 });

  const handleStartGame = () => {
    setCurrentScreen(Screen.GAME);
  };

  const handleGameOver = (data: ScoreData) => {
    setLastScore(data);
    setCurrentScreen(Screen.GAME_OVER);
  };

  const handleHome = () => {
    setCurrentScreen(Screen.START);
  };

  return (
    <main className="min-h-screen w-full bg-neon-dark text-white overflow-hidden selection:bg-neon-pink selection:text-white">
      {/* Background Grid Effect */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Main Content Area */}
      <div className="relative z-10 h-screen w-full flex items-center justify-center">
        {currentScreen === Screen.START && (
          <StartScreen onStart={handleStartGame} />
        )}
        
        {currentScreen === Screen.GAME && (
          <GameScreen onGameOver={handleGameOver} />
        )}
        
        {currentScreen === Screen.GAME_OVER && (
          <GameOverScreen 
            data={lastScore} 
            onRestart={handleStartGame} 
            onHome={handleHome}
          />
        )}
      </div>
    </main>
  );
};

export default App;