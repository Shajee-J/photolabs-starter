import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation




const App = () => {
  const [favorites, setFavorites] = useState([]);

  // function to toggle, toggleState function, isFav function... =>  pass in as props
  const toggleFav = (id) => {
    if (favorites.includes(id)) {
      const fav = [...favorites].filter(photoId => photoId != id)
      setFavorites(fav)
      return;
    } else {
      setFavorites(prev => [...prev, id])
    }
  };
  const isFavPresent = favorites.length

  const [photoModal, setPhotoModal] = useState(false);
  const toggleModal = (event) => {
    return (
    photoModal ? setPhotoModal(false) : setPhotoModal(true) 
    )}

  return (
    <div className="App">
      <div>
        <HomeRoute photos={photos} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} toggleModal={toggleModal} />
        { photoModal  && <PhotoDetailsModal toggleModal={toggleModal} /> }
      </div>
    </div>
  );
};

export default App;
