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
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        // props.setUsers([
        //     {id: 1, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
        //         followed: false, fullName: "Anton", status:"I'm a boss", location:{city:"Kyiv", country: "Ukraine"}},
        //     {id: 2, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
        //         followed: true, fullName: "Denis", status:"I'm a boss", location:{city:"Tokyo", country: "Japan"}},
        //     {id: 3, photoUrl:'https://lh3.googleusercontent.com/gK5cSYiIvIF3S5DS_3NG_-ZbSTUvwnSkfFr2wFSWjiqtcgaUiOCXJqZTwXL2spKX_hc',
        //         followed: true, fullName: "Vladimir", status:"I'm a boss", location:{city:"Antalya", country: "Turkey"}},
        //     // {id: 4, followed: false, fullName: "Oleh", status:"I'm a boss", location:{city:"Kharkiv", country: "Ukraine"}},
        //     // {id: 5, followed: false, fullName: "Ilya", status:"I'm a boss", location:{city:"Barcelona", country: "Spain"}},
        //     // {id: 6, followed: true, fullName: "Yaroslav", status:"I'm a boss", location:{city:"Mahachkala", country: "Dagestan"}},
        // ])
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsLoading(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
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