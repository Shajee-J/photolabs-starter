import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
const [fav, setFav] = useState(false)
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