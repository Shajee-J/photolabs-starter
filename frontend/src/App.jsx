import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation




const App = () => {
  // const [favorites, setFavorites] = useState([]);

  // // function to toggle, toggleState function, isFav function... =>  pass in as props
  // const toggleFav = (id) => {
  //   if (favorites.includes(id)) {
  //     const fav = [...favorites].filter(photoId => photoId != id);
  //     setFavorites(fav)
  //     return;
  //   } else {
  //     setFavorites(prev => [...prev, id]);
  //   }
  // };

  const {favorites, toggleFav, isFavPresent, photo, toggleModal, photoModal} = useApplicationData();

  
 

  // const isFavPresent = favorites.length;

  // const [photoModal, setPhotoModal] = useState(false);

  // const [photo, setPhoto] = useState();
  // const toggleModal = (id) => {
  //   if (photoModal) {
  //     setPhotoModal(false)
  //   } else { setPhotoModal(true) }
  //   const modelPhotoArr = photos.filter(photo => photo.id === id);
  //   setPhoto(modelPhotoArr[0])
  // };



  // const doesFavExist = (id) => {
  //   return (
  //     favorites.includes(props.id) ? true : false
  //   );
  // };



  // isolate single photo in app.jsx based on photo.id 
  // pass "photo" into photolist in modal details
  // loop suggested photos per selected id in modal in app.jsx before passing it down.
  // instead of re-using photolistitem, just c/p certain html in deatilmodal.jsx

  // const [modalphoto, setmodalPhoto] = useState();
  // const modPho = (id) => {
  //   for (let photo of photos) {
  // if (photo.id === id) {
  //   setmodalPhoto()
  //   setmodalPhoto(photo)
  //   return; 
  // }
  //   }
  // };






  return (
    <div className="App">
      <div>
        <HomeRoute photos={photos} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} toggleModal={toggleModal} />
        {photoModal && <PhotoDetailsModal toggleModal={toggleModal} photo={photo} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} />}
      </div>
    </div>
  );
};

export default App;
