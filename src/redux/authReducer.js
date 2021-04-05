const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
    "id": null,
    "login": null,
    "email": null,
    isLoading: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case TOGGLE_IS_LOADING:
            return{...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}})


export default authReducer;