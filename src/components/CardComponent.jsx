// src/components/CardComponent.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ card, flipped, solved, onClick }) => (
  <Card onClick={onClick} style={{ height: 100, cursor: 'pointer' }}>
    <CardContent>
      {flipped || solved ? (
        <Typography variant="h6" align="center">
          {card}
        </Typography>
      ) : (
        <Typography variant="h6" align="center">
          ?
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default CardComponent;
