import css from "../Dialogues.module.css";

export const Message = (props) => {



    return (
        <div>
            <div>
                {props.message}
            </div>
        </div>
    );
}