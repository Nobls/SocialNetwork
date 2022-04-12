import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    changeNewPostText:(changeText:string)=> void
}

function MyPosts(props: PropsType) {

    const {posts, addPost, newPostText, changeNewPostText} = props

    // const postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addNewPostHandler = () => {
        addPost()
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        changeNewPostText(e.currentTarget.value)
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



