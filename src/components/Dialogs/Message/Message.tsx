import React from 'react';
import s from "../Dialogs.module.css";
import {AllActionCreatorType} from "../../../redux/state";

type PropsType = {
    message: string
    dispatch: (action: AllActionCreatorType) => void
}

const Message = (props:PropsType) => {

    const {message,} = props
    return (
        <div className={s.message}>
            {message}
        </div>

    )
};

export default Message;