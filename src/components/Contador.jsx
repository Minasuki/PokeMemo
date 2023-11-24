import PropTypes from "prop-types";
import { Typography, Paper } from "@mui/material";
import { variant6 } from "./styles";

const Contador = ({ movimientos }) => {
  return (
    <Paper elevation={3} style={{ padding: 10, marginBottom: 20, display:'flex', flexDirection: 'column',
    alignItems: 'center', }}>
      <Typography variant="h6" gutterBottom sx={variant6}>
        Movimientos:
      </Typography>
      <Typography variant='h4'>
        {movimientos}
      </Typography>
    </Paper>
  );
};

Contador.propTypes = {
  movimientos: PropTypes.number.isRequired,
};

export default Contador;
