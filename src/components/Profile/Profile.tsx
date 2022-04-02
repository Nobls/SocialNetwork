import React from "react";
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props:any) {

    const {posts} = props

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile



