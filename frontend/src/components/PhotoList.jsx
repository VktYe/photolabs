import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({photos}) => {

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
