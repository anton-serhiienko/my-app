import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response=>{
                this.props.setUserData(response.data)
            }

        )
    }

    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) =>{

}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);