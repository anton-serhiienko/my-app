const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {id: 1, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
            followed: false, fullName: "Anton", status:"I'm a boss", location:{city:"Kyiv", country: "Ukraine"}},
        {id: 2, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
            followed: true, fullName: "Denis", status:"I'm a boss", location:{city:"Tokyo", country: "Japan"}},
        {id: 3, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
            followed: true, fullName: "Vladimir", status:"I'm a boss", location:{city:"Antalya", country: "Turkey"}},
        // {id: 4, followed: false, fullName: "Oleh", status:"I'm a boss", location:{city:"Kharkiv", country: "Ukraine"}},
        // {id: 5, followed: false, fullName: "Ilya", status:"I'm a boss", location:{city:"Barcelona", country: "Spain"}},
        // {id: 6, followed: true, fullName: "Yaroslav", status:"I'm a boss", location:{city:"Mahachkala", country: "Dagestan"}},
    ],
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
            return{...state, users: [...state.users ,...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})

export default usersReducer;