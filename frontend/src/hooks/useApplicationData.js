import { useState } from "react";
import photos from 'mocks/photos';


const useApplicationData = () => {

const [favorites, setFavorites] = useState([]);

// function to toggle, toggleState function, isFav function... =>  pass in as props
const toggleFav = (id) => {

  
  if (favorites.includes(id)) {
    const fav = [...favorites].filter(photoId => photoId != id);
    setFavorites(fav)
    return;
  } else {
    setFavorites(prev => [...prev, id]);
  }
};

const isFavPresent = favorites.length;

  const [photoModal, setPhotoModal] = useState(false);
  
  const [photo, setPhoto] = useState();
  const toggleModal = (id) => {
    if (photoModal) {
      setPhotoModal(false)
    } else { setPhotoModal(true) }
    const modelPhotoArr = photos.filter(photo => photo.id === id);
    setPhoto(modelPhotoArr[0])
  };


return {
    favorites,
    toggleFav,
    isFavPresent,
    photo,
    toggleModal,
    photoModal

  };
};

export default useApplicationData;