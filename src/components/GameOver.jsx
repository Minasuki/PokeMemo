import PropTypes from "prop-types";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const GameOver = ({ open, handleClose }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
            action={
                <>
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </>
            }
            message="¡Felicidades! Has ganado el juego."

        />
    );
};

GameOver.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default GameOver;
