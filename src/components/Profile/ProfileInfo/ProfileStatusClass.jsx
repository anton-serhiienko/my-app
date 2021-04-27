import React from 'react';

//import css from "./ProfileInfo.module.css";


class ProfileStatusClass extends React.Component {
    state = {
        editMode: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    activateEditMode =()=> {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={() => {
                            this.activateEditMode()
                        }}>Status: {this.props.status || "Your status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange}
                               onBlur={() => {this.deactivateEditMode()}}
                               autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatusClass;



