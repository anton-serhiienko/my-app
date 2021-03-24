import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogues from "./Dialogues";
import StoreContext from "../../StoreContext";

const DialoguesContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();


                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageTextActionCreator(body));
                }

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                return (

                    <Dialogues sendMessage={sendMessage}
                               updateNewMessageText={onMessageChange}
                               newMessageText={state.dialogsPage.newMessageText}
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}/>

                );
            }
        }

        </StoreContext.Consumer>
    );
}
export default DialoguesContainer;