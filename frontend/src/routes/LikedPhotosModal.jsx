
// LikePhotos component - will display all liked photos by user 
// - onClick => heart icon in nav bar
// Opens Modal
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const LikedPhotosModal = ({ onClose, photos, toggleFavourites, favourites, onPhotoSelect }) => {
  const likedPhotos = photos.filter(photo => favourites.includes(photo.id))
  console.log(likedPhotos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>


      <div className="photo-details-modal__images">


        <h2 className="photo-details-modal__images">Photos You Liked</h2>
        {likedPhotos.length > 0 ? (<PhotoList

          photos={likedPhotos}
          toggleFavourites={toggleFavourites}
          favourites={favourites}
          onPhotoSelect={onPhotoSelect}
        />) : (
          <p>
            You haven't liked any photos yet
          </p>
        )}

      </div>
    </div>

  )
}

export default LikedPhotosModal;