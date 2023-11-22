import PropTypes from "prop-types";
import { Typography, Paper } from "@mui/material";

const Contador = ({ movimientos }) => {
  return (
    <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
      <Typography variant="h5" gutterBottom>
        Movimientos: {movimientos}
      </Typography>
    </Paper>
  );
};

Contador.propTypes = {
    movimientos: PropTypes.number.isRequired,
  };

export default Contador;
