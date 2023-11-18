import {
  CardMedia,
  Card as MaterialCard,
} from "@mui/material";
import PropTypes from "prop-types";


const Card = ({ image, isFlipped, onClick }) => {

  return (
    <MaterialCard
      onClick={onClick}
      className={`card ${isFlipped ? 'flipped' : ''}`}
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
       image={isFlipped ? image : 'back_of_card_image.jpg'}
       style={{
         width: '100%',
         height: '100%',
       }}
      />
    </MaterialCard>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
