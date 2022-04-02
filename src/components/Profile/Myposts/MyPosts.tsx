import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props:any) {

    const {posts} = props

    let postsElements = posts
        .map( (p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount}/> )

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



