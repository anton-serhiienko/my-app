import React from "react";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUserCount,
    getStateUsers
} from "../../redux/users-selectors"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   getUsers={this.props.getUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getStateUsers(state),
        totalUsersCount: getTotalUserCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        unfollow, setCurrentPage,
        follow, toggleFollowingProgress, getUsers}))
(UsersContainer)



