import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';


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

  return (
    <div className="App" >
      <HomeRoute 
        toggleFavourites={toggleFavourites}
        favourites={favourites}
        photos={photos}
        topics={topics}
      />
    </div>
  );
};

export default App;
