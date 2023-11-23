import { useState, useEffect } from "react";
import Card from "../components/Card";
import imgs from "./images";
import { Button, Box, FormControl, FormLabel, RadioGroup, Radio,FormControlLabel } from "@mui/material";
import Contador from "../components/Contador";
import GameOver from "../components/GameOver";

const shuffleArray = (array) => {
  // Algoritmo de Fisher-Yates para barajar el array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameBoard = () => {
  const [tarjeta, setTarjeta] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [movimientos, setMovimientos] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [level, setLevel] = useState("easy");

  const createBoard = () => {

    let numTarjetas = 8

    switch (level) {
      case 'easy':
        numTarjetas = 8
        break;
      case 'medium':
        numTarjetas = 14
        break;
      default: numTarjetas = 8
        break;
    }

    // Duplicar tarjetas
    const duplicatecards = imgs.slice(0, numTarjetas).flatMap((img) => {
      const duplicate = {
        ...img,
        id: img.id + imgs.length,
      };
      return [img, duplicate];
    });

    // LLama a la funcion para varajear las tarjetas
    const newCards = shuffleArray(duplicatecards);

    // guarda la tarjeta ya varajeada y los demas valores pordefaul
    const cards = newCards.map(card => {
      return {
        ...card,
        flipped: false,
        matched: false,
      };
    });
    setTarjeta(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  // Inicia la funcionalidad del clic de las tarjetas.
  const handleCardClick = id => {

    //Asi no se cliclea nada antes de hacer otra cosa
    if (isDisabled) return;

    // Filtra las tarjetas con id para encontrar la tarjeta especifica
    const [currentCard] = tarjeta.filter(card => card.id === id);

    //entra cuando esta en false
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
            setTarjeta(tarjeta);
            setIsDisabled(false);
          }, 1000);
        }

        setFlippedCards([]);
        setMovimientos(movimientos + 1);
      }

      setTarjeta(tarjeta);
    }

    if (tarjeta.every(card => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  const handleNewGame = () => {
    setTarjeta([]);
    createBoard();
    setMovimientos(0);
    setGameOver(false);
    setIsDisabled(false);
  };

  const handleSnackbarClose = () => {
    setGameOver(false);
  };

  return (
    <>
      <GameOver open={gameOver} handleClose={handleSnackbarClose} />

      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">Nivel de Dificultad</FormLabel>
          <RadioGroup
            row
            aria-label="level"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <FormControlLabel value="easy" control={<Radio />} label="Fácil" />
            <FormControlLabel value="medium" control={<Radio />} label="Intermedio" />
            {/* Add more difficulty levels if needed */}
          </RadioGroup>
        </FormControl>
      </Box>

      <Contador movimientos={movimientos} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {tarjeta.map(card => (
          <Card
            card={card}
            key={card.id}
            handleCardClick={handleCardClick}
          />
        ))}
      </Box>
      <Button
        onClick={handleNewGame}
      >
        Nuevo Juego
      </Button>
    </>
  );
};

export default GameBoard;
