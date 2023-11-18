import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ card, flipped, solved, onClick }) => (
  <Card onClick={onClick} style={{ height: 100, cursor: 'pointer' }}>
    <CardContent>
      {flipped || solved ? (
        <Typography variant="h6" align="center">
          {card}
        </Typography>
      ) : (
        <Typography variant="h6" align="center">
          ?
        </Typography>
      )}
    </CardContent>
  </Card>
);

CardComponent.propTypes = {
    card: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CardComponent;
