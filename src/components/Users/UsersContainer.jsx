import React from "react";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsLoading
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import {UsersAPI} from "../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        UsersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(pageNumber)
        UsersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/>: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
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
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsLoading
})(UsersAPIComponent)

export default UsersContainer;