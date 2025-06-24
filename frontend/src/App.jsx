import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
  const toggleFavourites = (photoId) => {
  setFavourites((prev) => 
    prev.includes(photoId) 
    ? prev.filter(id => id !== photoId)
    : [...prev, photoId]
  ) 
}
 const [modal, setModal] = useState(null);
 const handleCloseModal = () => setModal(null);
 
  return (
    <div className="App" >
      <HomeRoute 
        toggleFavourites={toggleFavourites}
        favourites={favourites}
        photos={photos}
        topics={topics}
        clickedPhoto={setModal}
      />
      {modal && <PhotoDetailsModal onClose={handleCloseModal} photo={modal}/>}
    </div>
  );
};

export default App;
