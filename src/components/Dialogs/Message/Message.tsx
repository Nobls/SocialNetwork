import React from 'react';
import s from "../Dialogs.module.css";

type PropsType = {
    message: string
}

const Message = (props:PropsType) => {

    const {message} = props

    return (
        <div className={s.message}>
            {message}
        </div>
    )
};

export default Message;