// components/Card.js
import React from 'react';
import { Card as MaterialCard, CardContent, CardMedia } from '@material-ui/core';

const Card = ({ image, isFlipped, onClick }) => {
  return (
    <MaterialCard onClick={onClick} className={`card ${isFlipped ? 'flipped' : ''}`}>
      <CardMedia component="img" alt="Card" height="140" image={isFlipped ? image : 'back_of_card_image.jpg'} />
      <CardContent>{/* Any additional content you want to display */}</CardContent>
    </MaterialCard>
  );
};

export default Card;
