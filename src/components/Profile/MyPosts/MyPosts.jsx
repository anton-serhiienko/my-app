import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likeCount ={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }

    return(
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea ref={ newPostElement }></textarea>
                <button onClick={ () => { addPost() }}>Add post</button>
            </div>
            <div className={css.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;