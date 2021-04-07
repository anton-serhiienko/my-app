import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "33f2f5d0-34de-488e-aea1-de81ee51cd56"
    }
});

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                    return response.data;
                }
            )
    }
}

export const followAPI = {
    unfollowUser(id, unfollow) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(id);
                }
            })
    },

    followUser(id, follow) {
        return instance.post(`follow/${id}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(id);
                }
            })
    }
}

export const authAPI = {
    authUser(setAuthUserData) {
        return instance.get(`auth/me`)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        setAuthUserData(id, email, login)
                    }
                }
            )
    }
}
