import {
    GET_IMAGES, 
    GET_IMAGES_SUCCESS,
    GET_IMAGES_FAIL,
    SET_SELECTED_IMAGE,
    CLEAR_SELECTED_IMAGE
} from './types';
import { apiUrl } from '../configs/constants';

export const getImages = () => dispatch => {
    dispatch(loadImages())
    return fetch(apiUrl)
        .then(response => response.json())
        .then(images => dispatch(getImagesSuccess(images)))
        .catch(_ => dispatch(getImagesFail()));
}


const loadImages = () => ({
    type: GET_IMAGES
})

const getImagesSuccess = images => ({
    type: GET_IMAGES_SUCCESS,
    images
})

const getImagesFail = () => ({
    type: GET_IMAGES_FAIL
})

export const setSelectedImage = index => ({
    type: SET_SELECTED_IMAGE,
    index
})

export const clearSelectedImage = () => ({
    type: CLEAR_SELECTED_IMAGE
})
