import PropTypes from "prop-types";
import {
  CardMedia,
  Card as MaterialCard,
} from "@mui/material";
import pokemon from "../estado/img/pokemon.svg";

const Card = ({ card, handleCardClick }) => {
  return (
    <MaterialCard
      onClick={() => handleCardClick(card.id)}
      style={{
        width: 120,
        height: 120,
        margin: 9,
        cursor: 'pointer',
        perspective: 1000,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s',
      }}
    >
      <CardMedia
        component="img"
        alt="Card"
        height="140"
        image={card.flipped ? card.img : pokemon}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </MaterialCard>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default Card;
