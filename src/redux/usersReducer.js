const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
    users: [ ],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return(u.id === action.userId)?{...u, followed: true}: u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return(u.id === action.userId)?{...u, followed: false}: u;
                })
            }
        case SET_USERS:
            return{...state, users: action.users}
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_LOADING:
            return{...state, isLoading: action.isLoading}
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsLoading = (isLoading) => ({type:TOGGLE_IS_LOADING, isLoading})

export default usersReducer;