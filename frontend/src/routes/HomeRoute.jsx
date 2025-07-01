import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, favourites, toggleFavourites, onPhotoSelect, onLoadTopic, onLikedPhotosClick }) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        onLoadTopic={onLoadTopic}
        onLikedPhotosClick={onLikedPhotosClick}/>
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
