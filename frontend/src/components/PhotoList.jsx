import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos, favourites, toggleFavourites, onPhotoSelect }) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          urls={photo.urls}
          location={photo.location}
          user={photo.user}
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          onPhotoSelect={onPhotoSelect}
          photo={photo}              
        />
      ))}
    </ul>
  );
};

export default PhotoList;
// 