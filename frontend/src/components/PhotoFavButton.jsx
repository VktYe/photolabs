import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = ({ favourites, toggleFavourites, photoId }) => {
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourites(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites.includes(photoId)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
