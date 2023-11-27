import PropTypes from "prop-types";
import {
  CardMedia,
  Card as MaterialCard,
} from "@mui/material";
import pokemon from "../estado/img/pokemon.svg";
import { CardMaterial } from "./styles";

const Card = ({ card, handleCardClick }) => {
  return (
    <MaterialCard
      onClick={() => handleCardClick(card.id)}
      sx={CardMaterial}
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
