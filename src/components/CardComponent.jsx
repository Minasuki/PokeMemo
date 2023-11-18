import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';
import useImageManager from '../estado/useImageManager';

const CardComponent = ({ index, flipped, solved, onClick }) => {
    const { getImage } = useImageManager();
  
    return (
      <Card onClick={onClick} style={{ height: 100, cursor: 'pointer' }}>
        <CardContent>
          {flipped || solved ? (
            <img src={`path/to/images/${getImage(index)}`} alt={getImage(index)} style={{ width: '100%', height: '100%' }} />
          ) : (
            <Typography variant="h6" align="center">
              ?
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  };
  

CardComponent.propTypes = {
    index: PropTypes.string.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CardComponent;
