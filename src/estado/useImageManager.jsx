import bulbasaur from './img/bulbasaur.svg'
import charter from './img/charcter.svg'
import eevee from './img/eevee.svg'

const useImageManager = () => {
  const images = [
   bulbasaur,
   charter, eevee
  ];

  const getImage = (index) => images[index];

  return { getImage };
};

export default useImageManager;
