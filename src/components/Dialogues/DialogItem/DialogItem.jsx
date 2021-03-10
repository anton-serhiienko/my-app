import css from "../Dialogues.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    let path = "/dialogues/" + props.id;

    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}