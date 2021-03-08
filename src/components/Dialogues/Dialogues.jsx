import css from "./Dialogues.module.css";


const Dialogues = () => {
    return(
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={css.dialog +' ' + css.active}>
                    Anton
                </div>
                <div className={css.dialog}>
                    Den4ik
                </div>
                <div className={css.dialog}>
                    Vova
                </div>
                <div className={css.dialog}>
                    Alek
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>
                    Hi
                </div>
                <div className={css.message}>
                    How do you do?
                </div>
                <div className={css.message}>
                    Wassap
                </div>
            </div>
        </div>
    )
}

export default Dialogues;