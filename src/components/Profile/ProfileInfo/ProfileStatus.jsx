import React from 'react';

//import css from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode () {

        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(event) {



        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={() => {
                            this.activateEditMode()
                        }}>Status: {this.props.status}</span>
                    </div>
                    :
                    <div onBlur={() => {this.deactivateEditMode()}}>
                        <input autoFocus={true}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;



