const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.messages.push({id: 4, message: body});
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE};
}

export const updateNewMessageTextActionCreator = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
}

export default dialogsReducer;