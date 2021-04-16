import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
    "id": null,
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
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const verifyAuth = () => (dispatch) => {
    return authAPI.authUser()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.authLogIn(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(verifyAuth())
                }
            }
        )

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