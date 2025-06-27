import { useState } from "react";
import { useReducer } from "react";

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
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.photoId]
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.photoId)
      }

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos
      }

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topic: action.topic
      }

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modal: action.photo
      }

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        photoDetails: action.photo

      }

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        modal: null
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }

}

const initialState = {
  favourites: [],
  photos: [],
  topic: [],
  modal: null,
  photoDetails: null
}

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }

  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo }); //open the modal
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, photo })
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS })

  }
  const onLoadTopic = (topicId) => {
    dispatch({ typeof: ACTIONS.SET_TOPIC_DATA, topic: topicId })
  };



  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal
  }
}

export default useApplicationData;