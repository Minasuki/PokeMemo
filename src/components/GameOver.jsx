import { Snackbar, Button } from "@mui/material";

const GameOver = ({ open, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="¡Felicidades! Has ganado el juego."
      action={
        <Button color="inherit" size="small" onClick={handleClose}>
          Cerrar
        </Button>
      }
    />
  );
};

export default GameOver;
