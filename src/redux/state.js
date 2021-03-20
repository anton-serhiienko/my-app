const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
            ]
        }
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id:3,
                message: this._state.profilePage.newPostText,
                likesCount:0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
 export const addPostActionCreator = () =>{
     return {type: ADD_POST};
}

 export const updateNewPostTextActionCreator = (newText) =>{
     return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}



window.store = store;
export default store;
