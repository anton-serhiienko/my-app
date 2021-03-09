import css from "./Dialogues.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogues/" + props.id;

    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    );
}

const Dialogues = () => {
    let dialogsData = [
        {id:1, name: "Anton"},
        {id:2, name: "Den4ik"},
        {id:3, name: "Vova"},
        {id:4, name: "Alek"}
    ]

    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "How do you do?"},
        {id:3, message: "Wassap"}
    ]

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>

            <div className={css.messages}>
                <Message message ={messagesData[0].message}/>
                <Message message ={messagesData[1].message}/>
                <Message message ={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogues;