const useImageManager = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
  ];

  const getImage = (index) => images[index];

  return { getImage };
};

export default useImageManager;
