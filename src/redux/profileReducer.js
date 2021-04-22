import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p=> p.id!== action.id)
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (message) => ({type: ADD_POST, message});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})


export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response =>{
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response =>{
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export default profileReducer;