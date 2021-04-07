import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
    "userId": null,
    "login": null,
    "email": null,
    isLoading: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                ...action.data,
                isAuth: true }
        case TOGGLE_IS_LOADING:
            return{...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}})

export const verifyAuth = () => {
    return (dispatch) => {
        authAPI.authUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    dispatch(setAuthUserData(userId, email, login))
                }
            }
        )
    }
}

export default authReducer;