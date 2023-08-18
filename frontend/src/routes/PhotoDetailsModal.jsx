import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoFavButton.scss'

const PhotoDetailsModal = (props) => {


  return (
    <div className="photo-details-modal__top-bar">
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={props.toggleModal} />
        </button>
        <div className="photo-details-modal__images" >
          <PhotoFavButton className="photo-details-modal__fav-btn" handleClick={props.handleClick} toggleFav={props.toggleFav} liked={props.liked} id={props.photo.id} />
          <img className="photo-details-modal__image" src={props.photo.urls.regular} alt="" onClick={() => { props.toggleModal(props.id) }} />
          <main className='photo-details-modal__photographer-details'>
          <img className="photo-list__user-profile" src={props.photo.user.profile} alt="" />
          <span>
          <p className="photo-list__user-info">{props.photo.user.username}</p>
          <p className="photo-list__user-info photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</p>
          </span>
          </main>
          <header className="photo-details-modal__header">Similar Photos</header>
          <PhotoList photos={Object.values(props.photo.similar_photos)} toggleFav={props.toggleFav} favorites={props.favorites} doesFavExist={props.doesFavExist} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
