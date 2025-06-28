import { useReducer, useEffect } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED', // like photo
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED', // unlike photo
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
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


      // Handles open and close modal
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modal: true,
        photoDetails: action.payload
      }

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
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(err => console.error("Photo data fetch error", err));
  }, []);


  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(err => console.error("Topic data fetch error", err));
  }, []);

  // Handles like and unlike feature 
  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }

  }

  const onPhotoSelect = (photo) => {
    // When a similar photo clicked in open modal it doesn't have similar_photos
    // so we find the full version of that photo from the state 
    const fullPhoto = state.photoData.find((p) => p.id === photo.id);
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: fullPhoto || photo
    });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS })

  }

  // handles fetching photos under specific topic
  const onLoadTopic = (topicId) => {
    fetch(`api/topics/${topicId}/photos`)
      .then(response => response.json())
      .then(data => {
        console.log("fetch topic photos:", data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      })
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