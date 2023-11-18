import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const ResetButton = ({ onReset }) => (
  <Button variant="contained" color="primary" onClick={onReset} style={{ marginTop: 20 }}>
    Reiniciar Juego
  </Button>
);

ResetButton.propTypes = {
    onReset: PropTypes.func.isRequired,
}

export default ResetButton;
