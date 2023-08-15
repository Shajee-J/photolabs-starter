import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoListItem) => {
        return (
        <PhotoListItem key={photoListItem.id}
          username={photoListItem.user.username}
          location={photoListItem.location}
          imageSource={photoListItem.urls.full}
          profile={photoListItem.user.profile} />);
      })}
    </ul>
  );
};

export default PhotoList;
