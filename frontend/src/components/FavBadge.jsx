import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = (isFavPhotoExist) => {

  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist.isFavPresent} displayAlert={isFavPhotoExist.isFavPresent} />
    </div>
  )
};

export default FavBadge;