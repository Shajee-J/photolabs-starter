import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoFavButton.scss'

const PhotoDetailsModal = (props) => {

  const { toggleModal, selectedPhoto, toggleFav, favorites, isFavPresent } = props

  return (
    <div className="photo-details-modal__top-bar">
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={toggleModal} />
        </button>
        <div className="photo-details-modal__images" >
          <div className="photo-details-modal__fav-btn">
            <PhotoFavButton toggleFav={toggleFav} liked={favorites.includes(selectedPhoto.id)} id={selectedPhoto.id} />
          </div>
          <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt="" onClick={() => toggleModal(selectedPhoto.id)} />
          <main className='photo-details-modal__photographer-details'>
            <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt="" />
            <span>
              <p className="photo-list__user-info">{selectedPhoto.user.username}</p>
              <p className="photo-list__user-info photo-list__user-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
            </span>
          </main>
          <header className="photo-details-modal__header">Similar Photos</header>
          <div className='photo-details-modal__grid'>
            <PhotoList photos={Object.values(selectedPhoto.similar_photos)} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
