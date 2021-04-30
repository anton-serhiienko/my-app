import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return{
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogues)

