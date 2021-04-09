import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogues from "../Dialogues/Dialogues";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={"/login"} />

        return (
            <Profile {...this.props}
                     profile={this.props.profile} />
        );
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)
