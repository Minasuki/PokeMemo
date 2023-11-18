import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import useGame from '../estado/useGame';

const ResetButton = () => {
  const { resetGame } = useGame();

  return (
    <Button variant="contained" color="primary" onClick={resetGame} style={{ marginTop: 20 }}>
      Reiniciar Juego
    </Button>
  );
};

ResetButton.propTypes = {
    onReset: PropTypes.func.isRequired,
}

export default ResetButton;
