import React, { useReducer, useEffect, useState } from "react";


const AppState = {
  favorites: [],
  photoModal: false,
  photoData: [],
  topicData: [],
  selectedPhoto: {}
};




const reducer = (state, action) => {
  
  if (action.type === "SET_PHOTO_DATA") {
    return { ...state, photoData: action.payload }; 
  }
  
  if (action.type === "SET_TOPIC_DATA") {
    return { ...state, topicData: action.payload };
  }
  
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
    const modelPhotoArr = state.photoData.filter(photo => photo.id === id);
    const newPhoto = newPhotoModal ? modelPhotoArr[0] : null;
    return {
      ...state, photoModal: newPhotoModal, selectedPhoto: newPhoto
    };
  };
  
  return state;
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, AppState);
  
  const { favorites, photoModal, photoData, topicData, selectedPhoto} = state;
  
  const toggleFav = (id) => {
    dispatch({ type: "TogglingFav", id });
  };
  
  const isFavPresent = favorites.length > 0;
  
  const toggleModal = (id) => {
    dispatch({ type: "TogglingModal", id });
  };
  
  
  useEffect(() => {
    
    const photoPromise = fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      // .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }));
      
    const topicPromise = fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      // .then(data => dispatch({ type: "SET_TOPIC_DATA", payload: data }));
            
    Promise.all([photoPromise, topicPromise])
      .then(res => {
        const [photos, topics] = res;
        dispatch({ type: "SET_PHOTO_DATA", payload: photos })
        dispatch({ type: "SET_TOPIC_DATA", payload: topics })
      })
  }, []);
    
      
      return {
        favorites,
        toggleFav,
        isFavPresent,
        toggleModal,
        photoModal,
        photoData,
        selectedPhoto,
        topicData
      };
    };
    
    export default useApplicationData;
    