import React, { useReducer } from "react";
import photos from 'mocks/photos';

const AppState = {
  favorites: [],
  photoModal: false,
  photo: null,
};

const reducer = (state, action) => {


  if (action.type === "TogglingFav") {
      const { id } = action;
      const updatedFavorites = state.favorites.includes(id) ? state.favorites.filter(photoId => photoId !== id) : [...state.favorites, id];
      return {
        ...state, favorites: updatedFavorites
      };
  };

  if (action.type === "TogglingModal") {
      const { id } = action;
      const newPhotoModal = !state.photoModal;
      const modelPhotoArr = photos.filter(photo => photo.id === id);
      const newPhoto = newPhotoModal ? modelPhotoArr[0] : null;
      return {
        ...state, photoModal: newPhotoModal, photo: newPhoto
      };
  };

  return state;
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, AppState);

  const { favorites, photoModal, photo } = state;

  const toggleFav = (id) => {
    dispatch({ type: "TogglingFav", id });
  };

  const isFavPresent = favorites.length > 0;

  const toggleModal = (id) => {
    dispatch({ type: "TogglingModal", id });
  };

  return {
    favorites,
    toggleFav,
    isFavPresent,
    photo,
    toggleModal,
    photoModal,
  };
};

export default useApplicationData;
