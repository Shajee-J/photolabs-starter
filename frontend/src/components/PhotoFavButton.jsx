import React, { useCallback, useState, useEffect } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const [fav, setFav] = useState(props.liked ? props.liked : false);
useEffect(() => {
    setFav(props.liked);
 }, [props.liked])
const handleClick = (event) => {
 setFav(!fav)
 props.toggleFav(props.id)
}

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={fav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;