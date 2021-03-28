import React from 'react';
import styles from "./users.module.css"
import * as axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";

let Users = (props) => {
    if(props.users.length === 0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
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


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={(u.photos.small !=null)? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={ () => {props.unfollow( u.id ) } }>Unfollow</button>
                            :<button onClick={ () => {props.follow( u.id ) } }>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;