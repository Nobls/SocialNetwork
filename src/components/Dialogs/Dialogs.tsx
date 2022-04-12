import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import React from "react";

type PropsType = {
    state: DialogsPageType
}

function Dialogs(props: PropsType) {

    const {state} = props

    let dialogsElements = state.dialogs.map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = state.messages.map((messages) => <Message message={messages.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = ()=> {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

            <textarea ref={newMessageElement}>

            </textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}

export default Dialogs