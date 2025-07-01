import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from './mocks/photos';
// import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import LikedPhotosModal from './routes/LikedPhotosModal';
import { useState } from 'react';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal
  } = useApplicationData();
  const { favourites, modal, photoDetails, photoData, topicData } = state;

  const [likedPhotosModal, setLikePhotosModal] = useState(false);
  const onLikedPhotosClick = () => setLikePhotosModal(prev => !prev);
  const onLikedClose = () => setLikePhotosModal(false);
  console.log("Modal open", likedPhotosModal)

  return (
    <div className="App" >
      <HomeRoute
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        photos={photoData}
        topics={topicData}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
        onLikedPhotosClick={onLikedPhotosClick}

      />
      {modal && (<PhotoDetailsModal
        onCloseModal={onClosePhotoDetailsModal}
        photo={photoDetails}
        photos={photoData}
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        onPhotoSelect={onPhotoSelect}

      />)}
      {likedPhotosModal && <LikedPhotosModal 
        onClose={onLikedClose}
        photo={photoDetails}
        photos={photoData}
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        onPhotoSelect={onPhotoSelect}

      />}
    </div>
  );
};

export default App;
