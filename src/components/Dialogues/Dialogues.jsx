import css from "./Dialogues.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogues = (props) => {


    let newMessageText = props.state.newMessageText;

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(body));
    }

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator() )
    }


    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsUsers}>
                {dialogElements}
            </div>

            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea   onChange={onMessageChange}
                                    value={newMessageText}
                                    placeholder="Enter your message..."/>
                    </div>
                    <div>
                        <button onClick={() => {sendMessage()} }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;