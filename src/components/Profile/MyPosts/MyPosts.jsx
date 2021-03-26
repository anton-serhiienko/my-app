import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likeCount ={p.likesCount}/>)

    let onPostChange = (e) =>{
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    let onAddPost = () => {
        props.addPost();
    }

    return(
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText} />

                <button onClick={ () => { onAddPost() }}>Add post</button>
            </div>
            <div className={css.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;