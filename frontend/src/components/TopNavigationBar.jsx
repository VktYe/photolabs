import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favourites, onLoadTopic }) => {
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge isFavPhotoExist={favourites.length > 0}
        selected={favourites.length > 0} />
    </div>
  )
};

export default TopNavigation;
