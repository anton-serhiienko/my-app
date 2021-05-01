import React from "react";
// import css from "./ProfileInfo.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {updatePhoto} from "../../redux/profileReducer";


const Profile = (props) => {
    return (

        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         updatePhoto={props.updatePhoto}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;