import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar'
import PhotoList from '../components/PhotoList';

const HomeRoute = ({photos, topics, favourites, toggleFavourites, clickedPhoto, onLoadTopic}) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favourites={favourites}
        onLoadTopic={onLoadTopic}/>
      <PhotoList 
        photos={photos}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        clickedPhoto={clickedPhoto}
        />
    </div>
  );
};

export default HomeRoute;
