import React from "react";
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AllActionCreatorType, ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
    dispatch: (action:AllActionCreatorType)=> void
}

function Profile(props:PropsType) {

    const {state,dispatch} = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} dispatch={dispatch} newPostText={state.newPostText}/>
        </div>
    )
}

export default Profile



