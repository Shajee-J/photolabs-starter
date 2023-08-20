import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {

  return ( 
  <div className="photo-list__item">
    <PhotoFavButton toggleFav={props.toggleFav} liked={props.liked} id={props.id}  />
    <img className="photo-list__image" src={props.imageSource} alt="" onClick={() => {props.toggleModal(props.id)}} />
   <div className="photo-list__user-details">
   <img className="photo-list__user-profile" src={props.profile} alt="" />
   <main>
   <p className="photo-list__user-info">{props.username}</p>
   <p className="photo-list__user-info photo-list__user-location">{props.location.city}, {props.location.country}</p>
   </main>
    </div> 
  </div>
  );
};

export default PhotoListItem;
