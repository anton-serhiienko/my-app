import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile state={props.state.profilePage} />}/>
                    <Route path="/dialogues"
                           render={() => <Dialogues state={props.state.dialogsPage} />}/>
                    <Route path="/music" render={() => <Music />}/>
                    <Route path="/news" render={() => <News />}/>
                    <Route path="/settings" render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
