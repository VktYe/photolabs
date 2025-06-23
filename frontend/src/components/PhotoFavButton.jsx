import { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

const PhotoFavButton = () => {
  const [state, setState] = useState(false)
  const handleClick = () => {
    console.log("Fav button clicked");
    setState(prevState => !prevState);
  }
  return (
          
    <div className="photo-list__fav-icon"  onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={state}/>
      </div>
    </div>
    
  );
};

export default PhotoFavButton;
