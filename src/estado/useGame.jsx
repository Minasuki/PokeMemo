// src/hooks/useGame.js
import { useState, useEffect, useCallback } from 'react';
import useImageManager from './useImageManager';

const useGame = () => {
  const { getImageArray } = useImageManager();

  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const generateDeck = useCallback(() => {
    const newDeck = [...getImageArray(), ...getImageArray()].sort(() => Math.random() - 0.5);
    setDeck(newDeck);
  }, [getImageArray]);

  useEffect(() => {
    generateDeck();
  }, [generateDeck]);

  const handleFlip = (index1, index2) => {
    if (deck[index1] === deck[index2]) {
      setSolved([...solved, deck[index1]]);
    }
  };

  const handleClick = (index) => {
    if (flipped.length < 2) {
      setFlipped([...flipped, index]);
      if (flipped.length === 1) {
        setDisabled(true);
        setTimeout(() => {
          handleFlip(flipped[0], index);
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const resetGame = useCallback(() => {
    generateDeck();
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
  }, [generateDeck]);

  return { deck, flipped, solved, disabled, handleClick, resetGame };
};

export default useGame;
