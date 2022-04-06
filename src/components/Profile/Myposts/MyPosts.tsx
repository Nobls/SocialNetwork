import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: PostsType[]
}

function MyPosts(props:PropsType) {

    const {posts} = props

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    return (

        <div className={s.postBlock}>
            <h3>
                My Posts
            </h3>
            <div>
                <div>
                    <textarea>

                    </textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>


        </div>
    )
}

export default MyPosts



