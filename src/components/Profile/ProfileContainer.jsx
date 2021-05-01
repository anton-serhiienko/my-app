import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updatePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";

import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile = () =>{
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps,prevState,snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     updatePhoto={this.props.updatePhoto}/>
        );
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        authorizedUserId : state.auth.id,

    }
}


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, updatePhoto}),
    withRouter
)
(ProfileContainer)
