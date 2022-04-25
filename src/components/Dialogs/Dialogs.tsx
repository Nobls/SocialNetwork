import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageAC, AllActionCreatorType, DialogsPageType, onMessageChangeAC} from "../../redux/state";
import React, {ChangeEvent} from "react";

type PropsType = {
    state: DialogsPageType
    dispatch: (action: AllActionCreatorType) => void
    newMessageText: string
}

function Dialogs(props: PropsType) {

    const {state, dispatch, newMessageText} = props

    // let dialogsElements = state.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    // let messagesElements = state.messages.map((messages) => <Message message={messages.message}/>)

    const addMessageHandler = () => {
        dispatch(addMessageAC(state.newMessageText))
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const changeText = e.currentTarget.value
        dispatch(onMessageChangeAC(changeText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {/*{dialogsElements}*/}
                {state.dialogs.map((dialogs) => <DialogItem dispatch={dispatch} name={dialogs.name} id={dialogs.id}/>)}
            </div>
            <div className={s.messages}>
                {/*{messagesElements}*/}
                {state.messages.map((messages) => <Message dispatch={dispatch} message={messages.message}/>)}
                <div className={s.inputWrapper}>
                    <textarea value={newMessageText} onChange={onChangeMessageHandler}>

                    </textarea>
                    <button onClick={addMessageHandler}>Add Message</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs