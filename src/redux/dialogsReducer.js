const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action)=> {
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