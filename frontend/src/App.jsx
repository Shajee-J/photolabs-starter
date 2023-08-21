import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";


const App = () => {


  const { favorites, toggleFav, isFavPresent, toggleModal, photoModal, photoData, selectedPhoto, topicData, changeTopic } = useApplicationData();




  return (
    <div className="App">
      <div>
        <HomeRoute changeTopic={changeTopic} photos={photoData} topicData={topicData} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} toggleModal={toggleModal} />
        {photoModal && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} toggleFav={toggleFav} favorites={favorites} isFavPresent={isFavPresent} />}
      </div>
    </div>
  );
};

export default App;
