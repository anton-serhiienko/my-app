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



const App = (props) => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer />}/>

                <Route path="/dialogues"
                       render={() => <DialoguesContainer />} />
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={()=> <UsersContainer/>}/>
            </div>
        </div>

    );
}


export default App;
