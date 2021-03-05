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
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;