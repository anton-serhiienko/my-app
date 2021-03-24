import css from "./Dialogues.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import React from "react";

const Dialogues = (props) => {

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }

    let onSendMessage = () => {
        props.sendMessage();
    }


    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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
                                    value={props.newMessageText}
                                    placeholder="Enter your message..."/>
                    </div>
                    <div>
                        <button onClick={() => {onSendMessage()} }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogues;