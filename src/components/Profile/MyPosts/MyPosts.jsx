import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id:1, message: "Hi, how are you?", likesCount: 20},
        {id:2, message: "It's my first project", likesCount: 4},
    ]

    return(
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post message={postData[0].message} likeCount ={postData[0].likesCount}/>
                <Post message={postData[1].message} likeCount ={postData[1].likesCount}/>

            </div>
        </div>
    );
}

export default MyPosts;