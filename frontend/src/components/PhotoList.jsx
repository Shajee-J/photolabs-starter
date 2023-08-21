import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photoListItem) => {
        return (
          <PhotoListItem key={photoListItem.id}
            photo={photoListItem}
            id={photoListItem.id}
            username={photoListItem.user.username}
            location={photoListItem.location}
            imageSource={photoListItem.urls.full}
            profile={photoListItem.user.profile}
            liked={props.favorites.includes(photoListItem.id)}
            toggleFav={props.toggleFav}
            toggleModal={props.toggleModal}
            isFavPresent={props.isFavPresent}
          />);
      })}
    </ul>
  );
};

export default PhotoList;
