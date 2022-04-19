import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {AllActionCreatorType} from "../../../redux/state";

type PropsType = {
    name: string
    id: number
    dispatch: (action: AllActionCreatorType) => void
}

const DialogItem = (props: PropsType) => {

    const {name, id} = props

    let path = '/dialogs/' + id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
        </div>
    )
};

export default DialogItem;