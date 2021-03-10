import css from "./Dialogues.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogues = (props) => {

    let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map( m => <Message message = {m.message}/>);

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsUsers}>
                { dialogElements }
            </div>

            <div className={css.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogues;