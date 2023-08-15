import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation


// const photos = [<PhotoListItem
//   key={sampleDataForPhotoListItem.id}
//   username={sampleDataForPhotoListItem.username}
//   location={sampleDataForPhotoListItem.location}
//   imageSource={sampleDataForPhotoListItem.imageSource}
//   profile={sampleDataForPhotoListItem.profile}
// />, <PhotoListItem
//   key={sampleDataForPhotoListItem.id}
//   username={sampleDataForPhotoListItem.username}
//   location={sampleDataForPhotoListItem.location}
//   imageSource={sampleDataForPhotoListItem.imageSource}
//   profile={sampleDataForPhotoListItem.profile}
// />, <PhotoListItem
//   key={sampleDataForPhotoListItem.id}
//   username={sampleDataForPhotoListItem.username}
//   location={sampleDataForPhotoListItem.location}
//   imageSource={sampleDataForPhotoListItem.imageSource}
//   profile={sampleDataForPhotoListItem.profile}
// />]



const App = () => {
  return (
    <div className="App">
      <div>
     <HomeRoute />
      </div>
    </div>
  );
};

export default App;
