import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

 
  return (
    <div className="home-route">
      <TopNavigation isFavPresent={props.isFavPresent} />
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} favorites={props.favorites} toggleModal={props.toggleModal}/>
    </div>
  );
};

export default HomeRoute;
