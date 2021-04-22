import React, {useEffect, useState} from 'react';


const ProfileStatusNonClass = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={() => {
                        activateEditMode()
                    }}>
                        Status: {props.status || "Your status"}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           onBlur={() => {
                               deactivateEditMode()
                           }}
                           autoFocus={true}
                           value={status}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusNonClass;



