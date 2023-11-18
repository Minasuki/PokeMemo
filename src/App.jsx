import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import GameBoard from './components/GameBoard';
import ResetButton from './components/ResetButton';
import gameStore from './stores/GameStore';

const App = observer(() => {
  useEffect(() => {
    gameStore.generateDeck();
  }, []);

  const handleCardClick = (index) => {
    if (!gameStore.disabled && !gameStore.flipped.includes(index)) {
      gameStore.handleClick(index);
    }
  };

  const handleReset = () => {
    gameStore.resetGame();
  };
  return (
    <>
        <div>
      <h1>Juego de Memoria</h1>
      <GameBoard deck={gameStore.deck} flipped={gameStore.flipped} solved={gameStore.solved} onCardClick={handleCardClick} />
      <ResetButton onReset={handleReset} />
    </div>
    </>
  )
})

export default App
