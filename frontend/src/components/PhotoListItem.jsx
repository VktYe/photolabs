import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, urls, user, location } = props;
  console.log("PhotoListItem is loaded") // delete 
  console.log(id) //delete
  /* Insert React */
  return (

    <div key={id} className="photo-list__item">
      <img className="photo-list__image" src={urls.regular}></img>
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
