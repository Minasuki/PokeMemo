import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import useGame from '../estado/useGame';


const GameBoard = () => {
  const { deck, flipped, solved, handleClick } = useGame();

  return (
    <Container>
      <Grid container spacing={2}>
        {deck.map((_, index) => (
          <Grid item key={index} xs={3}>
            <CardComponent
              index={index}
              flipped={flipped.includes(index)}
              solved={solved.includes(deck[index])}
              onClick={() => handleClick(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

GameBoard.propTypes = {
    deck: PropTypes.array.isRequired,
    flipped: PropTypes.array.isRequired,
    solved: PropTypes.array.isRequired,
    onCardClick: PropTypes.func.isRequired,
}

export default GameBoard;
