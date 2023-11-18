import { useState } from 'react';
import Card from './Card';

const GameBoard = () => {

  const [cards, setCards] = useState([]); // Implement logic to generate cards array

  const handleCardClick = (cardId) => {
    // Implement logic to handle card clicks
  };

  return (
    <div
    className="game-board"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {cards.map((card) => (
      <Card key={card.id} image={card.image} isFlipped={card.isFlipped} onClick={() => handleCardClick(card.id)} />
    ))}
  </div>
  );
};

export default GameBoard;
