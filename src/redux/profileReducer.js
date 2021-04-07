import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 20},
        {id: 2, message: "It's my first project", likesCount: 4},
    ],
    newPostText: "some text",
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}
export default profileReducer;