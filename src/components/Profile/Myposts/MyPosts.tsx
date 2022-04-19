import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, onPostChangeAC, PostsType} from "../../../redux/state";

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: any) => void
}

function MyPosts(props: PropsType) {

    const {posts, newPostText, dispatch} = props

    // const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addNewPostHandler = () => {
        dispatch(addPostAC(newPostText))
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const changeText =  e.currentTarget.value
        dispatch(onPostChangeAC(changeText))
    }

    return (

        <div className={s.postBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} value={newPostText}/>


                </div>
                <div>
                    <button onClick={addNewPostHandler}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {/*{postsElements}*/}
                {posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>


        </div>
    )
}

export default MyPosts



