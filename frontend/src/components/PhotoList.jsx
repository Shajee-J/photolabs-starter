import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photoListItem) => {
        return (  
          <PhotoListItem key={photoListItem.id}
          id={photoListItem.id}
          username={photoListItem.user.username}
          location={photoListItem.location}
          imageSource={photoListItem.urls.full}
          profile={photoListItem.user.profile}
          handleClick={() => props.handleClick(photoListItem.id)}
          favorites={props.favorites}
          toggleFav={props.toggleFav}
          />);
        })}
    </ul>
  );
};

export default PhotoList;
