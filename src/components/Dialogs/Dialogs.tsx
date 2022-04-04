import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props: any) {

    const {state} = props

    let dialogsElements = state.dialogs.map((dialogs: { name: any; id: any; }) => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    let messagesElements = state.messages.map((messages: { message: any; }) => <Message message={messages.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs