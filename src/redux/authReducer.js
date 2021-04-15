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
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_LOADING:
            return{...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data:{userId, email, login, isAuth}})

export const verifyAuth = () => {
    return (dispatch) => {
        authAPI.authUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data;
                    dispatch(setAuthUserData(userId, email, login, true))
                }
            }
        )
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.authLogIn(email, password, rememberMe)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(verifyAuth())
                    }
                }
            )
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.authLogOut()
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false))
                    }
                }
            )
    }
}

export default authReducer;