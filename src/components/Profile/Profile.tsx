import React from "react";
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
    addPost: (postMessage:string)=> void
}

function Profile(props:PropsType) {

    const {state, addPost} = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost} />
        </div>
    )
}

export default Profile



