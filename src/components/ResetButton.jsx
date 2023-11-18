// src/components/ResetButton.js
import React from 'react';
import { Button } from '@mui/material';

const ResetButton = ({ onReset }) => (
  <Button variant="contained" color="primary" onClick={onReset} style={{ marginTop: 20 }}>
    Reiniciar Juego
  </Button>
);

export default ResetButton;
