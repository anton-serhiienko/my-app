const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '' ,
                messages: [...state.messages,{id: 4, message: body} ]
            };
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE};
}

export const updateNewMessageTextActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
}

export default dialogsReducer;