import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

 
  return (
    <div className="home-route">
      <TopNavigation isFavPresent={props.isFavPresent} />
      <PhotoList isFavPresent={props.isFavPresent} photos={props.photos} toggleFav={props.toggleFav} favorites={props.favorites} toggleModal={props.toggleModal} doesFavExist={props.doesFavExist}/>
    </div>
  );
};

export default HomeRoute;
