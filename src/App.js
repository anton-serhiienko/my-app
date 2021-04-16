import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import Preloader from "./common/preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {

        if(!this.props.initialized){
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>

                    <Route path="/dialogues"
                           render={() => <DialoguesContainer/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.appPage.initialized
})

export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App);
