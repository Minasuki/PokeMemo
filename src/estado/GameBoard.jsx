import { useState, useEffect } from "react";
import Card from "../components/Card";
import imgs from "./images";
import { Button,Box } from "@mui/material";

const shuffleArray = (array) => {
  // Algoritmo de Fisher-Yates para barajar el array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard = () => {
  const [tarjeta, serTarjeta] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [movimientos, setMovimientos] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const createBoard = () => {
    const duplicatecards = imgs.flatMap((img, i) => {
      const duplicate = {
        ...img,
        id: img.id + imgs.length,
      };
      return [img, duplicate];
    });

    const newCards = shuffleArray(duplicatecards);
    const cards = newCards.map(card => {
      return {
        ...card,
        flipped: false,
        matched: false,
      };
    });
    serTarjeta(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  const handleCardClick = id => {
    if (isDisabled) return;

    const [currentCard] = tarjeta.filter(card => card.id === id);

    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true;

      const newFlippedCards = [...flippedCards, currentCard];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setIsDisabled(true);
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.img === secondCard.img) {
          firstCard.matched = true;
          secondCard.matched = true;
          setIsDisabled(false);
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            serTarjeta(tarjeta);
            setIsDisabled(false);
          }, 1000);
        }

        setFlippedCards([]);
        setMovimientos(movimientos + 1);
      }

      serTarjeta(tarjeta);
    }

    if (tarjeta.every(card => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  const handleNewGame = () => {
    serTarjeta([]);
    createBoard();
    setMovimientos(0);
    setGameOver(false);
    setIsDisabled(false);
  };

  return (
    <>
      {gameOver && (
        <div className='fixed inset-0 bg-black opacity-50 z-10'></div>
      )}

      <div className='relative h-screen flex items-center'>

        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          {tarjeta.map(card => (
            <Card
              card={card}
              key={card.id}
              handleCardClick={handleCardClick}
            />
          ))}
        </Box>
        <Button
          className='bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-yellow-500 hover:text-black transition-all mb-3'
          onClick={handleNewGame}
        >
          Nuevo Juego
        </Button>
      </div>

    </>
  );
};

export default GameBoard;
