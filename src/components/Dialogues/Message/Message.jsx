import css from "../Dialogues.module.css";
import React from "react";

export const Message = (props) => {
    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div>
                {props.message}
            </div>
            <div>
                <textarea ref={newMessageElement}>Your message...</textarea>
            </div>
            <div>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
}