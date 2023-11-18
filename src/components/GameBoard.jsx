// src/components/GameBoard.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import CardComponent from './CardComponent';

const GameBoard = ({ deck, flipped, solved, onCardClick }) => (
  <Container>
    <Grid container spacing={2}>
      {deck.map((card, index) => (
        <Grid item key={index} xs={3}>
          <CardComponent
            card={card}
            flipped={flipped.includes(index)}
            solved={solved.includes(card)}
            onClick={() => onCardClick(index)}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default GameBoard;
