import React, {useState} from "react";
import css from "./ProfileInfo.module.css";
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/userPhoto.png"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={css.avaAndInfo}>
                <div>
                    <img src={props.profile.photos.large || userPhoto}/>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
                <div>
                    <div className={css.profileName}>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status}
                                   updateStatus={props.updateStatus}/>
                </div>
            </div>
            <ProfileData profile={props.profile} isOwner={props.isOwner}/>
        </div>
    );
}

const ProfileData = (props) => {

    const Contact = ({contactTitle, ContactValue}) => {
        return <div>
            <b>{contactTitle}</b>: {ContactValue}
        </div>
    }

    let {editMode,setEditMode} = useState(false)



    return (
        <div>
            {props.isOwner&& <div><button onClick={()=>setEditMode(true)}>Edit</button></div>}
            <div>
                {props.profile.lookingForAJob ? "В поисках работы" : "Не ищу работу"}<br/>
                {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts</b>:
                <div>
                    {/*<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key=>{*/}
                    {/*    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
                    {/*})}*/}
                    {props.profile.contacts.facebook != null ?
                        <div><a href={`https://${props.profile.contacts.facebook}`}>facebook</a></div> : ""}
                    {props.profile.contacts.website != null ? <div>Website:
                        <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div> : ""}
                    {props.profile.contacts.vk != null ?
                        <div><a href={`https://${props.profile.contacts.vk}`}>vk</a></div> : ""}
                    {props.profile.contacts.twitter != null ?
                        <div><a href={props.profile.contacts.twitter}>twitter</a></div> : ""}
                    {props.profile.contacts.instagram != null ?
                        <div><a href={`https://${props.profile.contacts.instagram}`}>instagram</a></div> : ""}
                    {props.profile.contacts.youtube != null ?
                        <div><a href={props.profile.contacts.youtube}>youtube</a></div> : ""}
                    {props.profile.contacts.github != null ?
                        <div><a href={`https://${props.profile.contacts.github}`}>github</a></div> : ""}
                    {props.profile.contacts.mainlink != null ?
                        <div><a href={props.profile.contacts.mainlink}>mainlink</a></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;