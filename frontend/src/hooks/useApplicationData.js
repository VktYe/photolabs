import { useReducer, useEffect } from "react";

 const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED', //hook need to pdate to dispatch actions
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO', //hook need to update to dispatch actions
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
}

 function reducer(state, action) {
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
        photoData: action.payload
      }

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modal: true,
        photoDetails: action.payload // display photo details
      }

    // case ACTIONS.DISPLAY_PHOTO_DETAILS:
    //   return {
    //     ...state,
    //     photoDetails: action.photo

    //   }

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        modal: false,
        photoDetails: null
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }

}

const initialState = {
  favourites: [],
  modal: false,
  photoDetails: null,
  photoData: [],
  topicData: []
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}))
      .catch(err => console.error("Photo data fetch error", err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch(err => console.error("Topic data fetch error", err));
  }, []);


  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }

  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo }); //open the modal
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS })

  }
  const onLoadTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/${topicId}/photos`)
      .then(response => response.json())
      .then(data => {
        console.log("fetch topic photos:", data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })})
      .catch(err => console.error("Topic-specific photo data fetch error", err))
    
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