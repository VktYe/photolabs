import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from './mocks/photos';
// import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


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


  return (
    <div className="App" >
      <HomeRoute
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        photos={photoData}
        topics={topicData}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {modal && (<PhotoDetailsModal
        onCloseModal={onClosePhotoDetailsModal}
        photo={photoDetails}
        photos={photoData}
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        onPhotoSelect={onPhotoSelect}

      />)}
    </div>
  );
};

export default App;
