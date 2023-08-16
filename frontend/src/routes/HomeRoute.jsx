import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import photos from "mocks/photos";

const HomeRoute = () => {

  const [favorites, setFavorites] = useState([]);
  
  // function to toggle, toggleState function, isFav function... =>  pass in as props
  const toggleFav = (id) => {
    if (favorites.includes(id)) {
    const fav = [...favorites].filter(photoId => photoId != id) 
      setFavorites(fav)
      return;
      
    }
      setFavorites(prev => [...prev, id])
      // if id is not in array add, otherwise remove  new thing = ...arr
  
  }

  const isFav = (id) => {
    return // true if id in array, false if not
  }
  const isFavPresent = favorites.length

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList photos={photos} toggleFav={toggleFav} favorites={favorites} />
    </div>
  );
};

export default HomeRoute;
