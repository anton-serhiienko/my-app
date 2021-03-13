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
    addPost (){
        let newPost = {
            id:3,
            message: this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    }
}



window.store = store;
export default store;
