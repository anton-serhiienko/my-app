import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return{
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {

    return{
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        }
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);
export default DialoguesContainer;