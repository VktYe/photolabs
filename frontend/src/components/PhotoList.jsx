import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo)=> (
        <PhotoListItem
          
          key={photo.id}
          id={photo.id}
          urls={photo.urls}
          location={photo.location}
          user={photo.user} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;
