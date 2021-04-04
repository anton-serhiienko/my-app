import React from "react";
import css from "./ProfileInfo.module.css";
import Preloader from "../../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={css.avaAndInfo}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div>
                    <div className={css.profileName}>{props.profile.fullName}</div>
                    <div className={css.profileStatus}>Status: {props.profile.aboutMe}</div>
                </div>
            </div>
            <div>
                {props.profile.lookingForAJob?"В поисках работы":"Не ищу работу"}<br/>
                {props.profile.lookingForAJobDescription}
            </div>
            <div>
                contacts:
                <div>
                    {props.profile.contacts.facebook!=null?<div><a href={`https://${props.profile.contacts.facebook}`}>facebook</a></div>:""}
                    {props.profile.contacts.website!=null?<div>Website:
                        <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>:""}
                    {props.profile.contacts.vk!=null?<div><a href={`https://${props.profile.contacts.vk}`}>vk</a></div>:""}
                    {props.profile.contacts.twitter!=null?<div><a href={props.profile.contacts.twitter}>twitter</a></div>:""}
                    {props.profile.contacts.instagram!=null?<div><a href={`https://${props.profile.contacts.instagram}`}>instagram</a></div>:""}
                    {props.profile.contacts.youtube!=null?<div><a href={props.profile.contacts.youtube}>youtube</a></div>:""}
                    {props.profile.contacts.github!=null?<div><a href={`https://${props.profile.contacts.github}`}>github</a></div>:""}
                    {props.profile.contacts.mainlink!=null?<div><a href={props.profile.contacts.mainlink}>mainlink</a></div>:""}

                    {/*<div>website: {props.profile.contacts.website}</div>*/}
                    {/*<div>vk: {props.profile.contacts.vk}</div>*/}
                    {/*<div>twitter: {props.profile.contacts.twitter}</div>*/}
                    {/*<div>instagram: {props.profile.contacts.instagram}</div>*/}
                    {/*<div>youtube: {props.profile.contacts.youtube}</div>*/}
                    {/*<div>github: {props.profile.contacts.github}</div>*/}
                    {/*<div>mainlink: {props.profile.contacts.mainlink}</div>*/}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;