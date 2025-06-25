import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
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
  const {favourites, modal} = state;

 
  return (
    <div className="App" >
      <HomeRoute 
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        photos={photos}
        topics={topics}
        clickedPhoto={onPhotoSelect}
      />
      {modal && <PhotoDetailsModal 
        onClose={onClosePhotoDetailsModal} 
        photo={modal} 
        toggleFavourites={updateToFavPhotoIds}
        favourites={favourites}
        
      />}
    </div>
  );
};

export default App;
