import React, {MouseEventHandler} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: PostsType[]
    addPost: (postMessage:string)=>void
}

function MyPosts(props:PropsType) {

    const {posts, addPost} = props

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addNewPost = ()=>{
        let text = newPostElement.current?.value
            addPost('')
    }

    return (

        <div className={s.postBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>

                    </textarea>
                </div>
                <div>
                    <button onClick={()=>addNewPost()}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>


        </div>
    )
}

export default MyPosts



