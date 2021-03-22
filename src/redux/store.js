import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _callSubscriber(){
        console.log("State has been changed");
    },
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 20},
                {id: 2, message: "It's my first project", likesCount: 4},
            ],
            newPostText:"some text"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How do you do?"},
                {id: 3, message: "Wassup"}
            ],
            dialogs: [
                {id: 1, name: "Anton"},
                {id: 2, name: "Den4ik"},
                {id: 3, name: "Vova"},
                {id: 4, name: "Alek"}
            ],
            newMessageText: ""

        }
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}

window.store = store;
export default store;
