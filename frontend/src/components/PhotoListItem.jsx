import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {

  return (
  <div className="photo-list__item">
    <PhotoFavButton handleClick={props.handleClick} toggleFav={props.toggleFav} favorites={props.favorites} id={props.id}/>
    <img className="photo-list__image" src={props.imageSource} alt="" />
   <div className="photo-list__user-details">
   <img className="photo-list__user-profile" src={props.profile} alt="" />
   <body>
   <p className="photo-list__user-info">{props.username}</p>
   <p className="photo-list__user-info photo-list__user-location">{props.location.city}, {props.location.country}</p>
   </body>
    </div> 
  </div>
  );
};

export default PhotoListItem;
