import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile />}/>

                <Route path="/dialogues"
                       render={() => <DialoguesContainer />} />
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
