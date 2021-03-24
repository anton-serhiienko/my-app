import React from "react";
// import css from "./ProfileInfo.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;