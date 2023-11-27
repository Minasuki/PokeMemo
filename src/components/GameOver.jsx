import PropTypes from "prop-types";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";

const GameOver = ({ open, handleClose }) => {
  const fadeIn = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(-50px)",
  });

  return (
  <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
      <animated.div style={fadeIn}>
        <DialogContent>
          <Typography variant="h5" align="center" gutterBottom>
            ¡Felicidades! Has completado el juego.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            ¡Buena jugada!
          </Typography>
          <Button onClick={handleClose} fullWidth variant="contained" color="primary">
            Jugar de nuevo
          </Button>
        </DialogContent>
      </animated.div>
    </Dialog>
  );
};

GameOver.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default GameOver;
