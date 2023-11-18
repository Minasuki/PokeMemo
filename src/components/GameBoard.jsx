import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import CardComponent from './CardComponent';


const GameBoard = ({ deck, flipped, solved, onCardClick }) => (
  <Container>
    <Grid container spacing={2}>
      {deck.map((card, index) => (
        <Grid item key={index} xs={3}>
          <CardComponent
            card={card}
            flipped={flipped.includes(index)}
            solved={solved.includes(card)}
            onClick={() => onCardClick(index)}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

GameBoard.propTypes = {
    deck: PropTypes.array.isRequired,
    flipped: PropTypes.array.isRequired,
    solved: PropTypes.array.isRequired,
    onCardClick: PropTypes.func.isRequired,
}

export default GameBoard;
