import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "It's my first project", likesCount: 4},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.message,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.image}
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.id)
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (message) => ({type: ADD_POST, message});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const savePhoto = (image) =>({type:SAVE_PHOTO, image})


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const updatePhoto = (image) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(image)

    if (response.data.resultCode === 0) {
        dispatch(savePhoto(response.data.data.photos))
    }
}
export default profileReducer;