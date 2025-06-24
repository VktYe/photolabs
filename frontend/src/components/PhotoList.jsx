import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos, favourites, toggleFavourites, clickedPhoto}) => {

  return (
    <ul className="photo-list">
      {photos.map((photo)=> (
        <PhotoListItem
          
          key={photo.id}
          id={photo.id}
          urls={photo.urls}
          location={photo.location}
          user={photo.user} 
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          clickedPhoto={clickedPhoto}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
