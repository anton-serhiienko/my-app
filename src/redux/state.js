import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "It's my first project", likesCount: 4},
        ]
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
}

export let addPost = (postMessage) =>{
    let newPost = {
        id:3,
        message: postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
