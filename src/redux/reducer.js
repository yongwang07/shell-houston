import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  SET_SELECTED_IMAGE,
  CLEAR_SELECTED_IMAGE
} from "./types";

import { loadImageState } from "../configs/constants";

const initialState = {
  images: [],
  selected: -1,
  loadImageState: loadImageState.LOADING
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {...state, loadImageState: loadImageState.LOADING}

    case GET_IMAGES_SUCCESS:
      return {...state, images: action.images, loadImageState: loadImageState.LOAD }
    
    case GET_IMAGES_FAIL:
      return {...state, }

    case SET_SELECTED_IMAGE:
      return {...state, selected: action.index}
    
    case CLEAR_SELECTED_IMAGE:
      return {...state, selected: -1}
    
    default:
      return state;
  }

};

export default reducer;
