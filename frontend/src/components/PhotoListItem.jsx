import { Fragment } from "react";
import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const {id, urls, user, location} = props.data;
  console.log("PhotoListItem is loaded")
  /* Insert React */
  return (
    <Fragment key={id}>
      <div >
        <img src={urls.regular}></img>
      </div>
      <div>
        <img src={user.profile}></img>
        <p>{user.name}</p>
        <p>{location.city} {location.country}</p>
        </div>
    </Fragment>
  )
};

export default PhotoListItem;
