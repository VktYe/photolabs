import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';


const PhotoDetailsModal = ({ onCloseModal, photo, toggleFavourites, favourites, onPhotoSelect }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <PhotoFavButton
          favourites={favourites}
          toggleFavourites={toggleFavourites}
          photoId={photo.id}
        />
      </div>


      <div className="photo-details-modal__images">

        {/* main photo */}
        <img className="photo-details-modal__image" src={photo.urls.full}>
        </img>
        {/* photo details */}


        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={photo.user.profile}></img>
            <div className="photo-details-modal__photographer-info">{photo.user.name}
              <div className="photo-details-modal__photographer-location">{photo.location.city} {photo.location.country}</div>
            </div>
          </div>
        </div>

        <h3 className="photo-details-modal__images">Similar photos</h3>
        {<PhotoList
          photos={photo.similar_photos}
          photo={photo}
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          onPhotoSelect={onPhotoSelect}
        />}

      </div>
    </div>
  )
};

export default PhotoDetailsModal;
