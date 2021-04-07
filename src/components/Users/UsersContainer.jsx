import React from "react";
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress, getUsers, unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        unfollow, setCurrentPage,
        follow, toggleFollowingProgress, getUsers}),
    withAuthRedirect)
(UsersContainer)



