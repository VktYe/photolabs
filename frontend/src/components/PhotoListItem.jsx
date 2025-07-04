import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, urls, user, location, favourites, toggleFavourites, onPhotoSelect, photo } = props;

  return (
    <div key={id} className="photo-list__item">
      <PhotoFavButton
        toggleFavourites={toggleFavourites}
        favourites={favourites}
        photoId={id}

      />
      <img className="photo-list__image" src={urls.regular} onClick={() => onPhotoSelect(photo)}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}></img>
        <div className="photo-list__user-info">{user.name}
          <div className="photo-list__user-location">{location.city} {location.country}</div>
        </div>
      </div>
    </div>

  )
};

export default PhotoListItem;
