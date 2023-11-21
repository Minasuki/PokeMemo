import {
  CardMedia,
  Card as MaterialCard,
} from "@mui/material";
import PropTypes from "prop-types";


const Card = ({ card, handleCardClick }) => {
  return (
    <MaterialCard
      onClick={() => handleCardClick(card.id)}
      style={{
        width: 150,
        height: 200,
        margin: 10,
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
        image={card.flipped ? card.img : 'back_of_card_image.jpg'}
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
