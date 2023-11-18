import { useState } from "react";
import Card from "../components/Card";
import bulbasaur from './img/bulbasaur.svg'
import charcter from './img/charcter.svg'
import eevee from './img/eevee.svg'

const shuffleArray = (array) => {
  // Algoritmo de Fisher-Yates para barajar el array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateCards = () => {
  // Lista de imágenes, asumiendo que tienes un conjunto de imágenes
  const images = [bulbasaur, charcter,eevee];

  // Duplica las imágenes
  const duplicatedImages = [...images, ...images];

  // Baraja aleatoriamente el array de imágenes duplicadas
  const shuffledImages = shuffleArray(duplicatedImages);

  // Crea un array de objetos de cartas con propiedades como id, image, isFlipped, etc.
  const cards = shuffledImages.map((image, index) => ({
    id: index,
    image,
    isFlipped: false,
  }));

  return cards;
};

const GameBoard = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (cardId) => {
    // Verifica si la carta ya está volteada o si hay dos cartas ya volteadas
    if (flippedCards.length === 2 || flippedCards.includes(cardId)) {
      return;
    }

    // Voltea la carta haciendo una copia del array de cartas
    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );

    setCards(updatedCards);

    // Agrega la carta volteada al array de cartas volteadas
    setFlippedCards([...flippedCards, cardId]);

    // Si hay dos cartas volteadas, verifica si son iguales después de un tiempo
    if (flippedCards.length === 1) {
      setTimeout(checkForMatch, 1000);
    }
  };

  const checkForMatch = () => {
    const [card1, card2] = flippedCards;
    const areMatching = cards[card1].image === cards[card2].image;

    // Si las cartas son iguales, mantenlas volteadas
    // Si no son iguales, voltea ambas cartas de nuevo
    const updatedCards = cards.map((card) =>
      card.id === card1 || card.id === card2 ? { ...card, isFlipped: areMatching } : card
    );

    setCards(updatedCards);
    setFlippedCards([]);
  };

  return (
    <div
      className="game-board"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
