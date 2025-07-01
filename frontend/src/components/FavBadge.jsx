import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, selected, onLikedPhotosClick }) => {
  console.log("FavBadge onClick:", typeof onLikedPhotosClick)
  return (
    <div className='fav-badge' onClick={() => {
      console.log("fav badge clicked");
      onLikedPhotosClick();
    }}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  )
};

export default FavBadge;
