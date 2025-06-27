import { useState } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED', //hook need to pdate to dispatch actions
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO', //hook need to update to dispatch actions
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS', 
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
}

export function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return {
        ...state, 
        favourites: [...state.favourites, action.photoId]
      }
    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}
    
    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}

    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}
    
    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}

    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}

    case FAV_PHOTO_REMOVED:
      return 
      {/*insert all relevant actions as case statment */}
  }

  default: 
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    )
}

// const useApplicationData = (initial) => {
//   const [favourites, setFavourites] = useState([]);
//   const [modal, setModal] = useState(null);
//   const [topic, setTopic] = useState(null);

//   const updateToFavPhotoIds = (photoId) => {
//   setFavourites((prev) => 
//     prev.includes(photoId) 
//     ? prev.filter(id => id !== photoId)
//     : [...prev, photoId]
//   )
// }

//   const onPhotoSelect = (photo) => setModal(photo); //open the modal
//   const onClosePhotoDetailsModal = () => setModal(null); //close the modal
//   const onLoadTopic = (topicId) => setTopic(topicId);




//   const state = {
//     favourites,
//     modal, 
//     topic
//   }

//   return {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onLoadTopic,
//     onClosePhotoDetailsModal
//   }
// }

export default useApplicationData;