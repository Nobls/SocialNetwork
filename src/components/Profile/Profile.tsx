import React from "react";
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
}

function Profile(props:PropsType) {

    const {state} = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    )
}

export default Profile



