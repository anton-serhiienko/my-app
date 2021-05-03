import React, {useState} from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import Pagination from "react-js-pagination";

let Users = (props) => {

    let [activePage, setActivePage] = useState(1);

    let handlePageChange=(pageNumber)=>{
        setActivePage(pageNumber)
        props.getUsers(pageNumber,props.pageSize);
    }

    return (
        <div>
            {/*<Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}*/}
            {/*           currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>*/}

            <Pagination activePage={activePage}
                        itemsCountPerPage={props.pageSize}
                        totalItemsCount={props.totalUsersCount}
                        pageRangeDisplayed={10}
                        onChange={handlePageChange}
                        itemClass="page-item"
                         linkClass="page-link"/>
            {
                props.users.map(u => <User user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           key={u.id}/>)
            }
        </div>
    )
}

export default Users;