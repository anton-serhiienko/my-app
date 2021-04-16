import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    render(){
        return <Header {...this.props} logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);