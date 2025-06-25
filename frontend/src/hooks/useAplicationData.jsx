import { useState } from "react";

const useApplicationData = (initial) => {
  const [favourites, setFavourites] = useState([]);
  const [modal, setModal] = useState(null);
  const [topic, setTopic] = useState(null);

  const updateToFavPhotoIds = (photoId) => {
  setFavourites((prev) => 
    prev.includes(photoId) 
    ? prev.filter(id => id !== photoId)
    : [...prev, photoId]
  )
}

  const onPhotoSelect = (photo) => setModal(photo); //open the modal
  const onClosePhotoDetailsModal = () => setModal(null); //close the modal
  const onLoadTopic = (topicId) => setTopic(topicId);




  const state = {
    favourites,
    modal, 
    topic
  }

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;