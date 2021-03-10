import css from "../Dialogues.module.css";

export const Message = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    );
}