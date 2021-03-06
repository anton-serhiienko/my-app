import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post message='Hi, how are you?' likeCount ="20"/>
                <Post message="It's my first project" likeCount ="4"/>

            </div>
        </div>
    );
}

export default MyPosts;