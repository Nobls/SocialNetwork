import React from 'react';
import Friends from "./Friends/Friends";
import s from './SideBar.module.css'

const SideBar = (props: any) => {

    const {state} = props

    let friendsItem = state.friends.map((friends: { name: any; }) => <Friends name={friends.name}/>)

    return (
        <div className={s.sideBar}>
            <h3 className={s.title}>Friends</h3>
            <div className={s.friendsItem}>
                {friendsItem}
            </div>
        </div>
    );
};

export default SideBar;