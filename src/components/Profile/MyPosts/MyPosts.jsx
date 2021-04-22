import React, {useEffect, useState} from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

    let [text, setText] = useState("");
    let postElements = props.posts.map( p => <Post message={p.message} likeCount ={p.likesCount}/>)

    let onPostChange = (e) =>{
        setText(e.currentTarget.value)
    }

    let onAddPost = () => {
        props.addPost(text);
        setText("")
    }

    return(
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          placeholder={"some text"}
                          value={text}/>

                <button onClick={ () => { onAddPost() }}>Add post</button>
            </div>
            <div className={css.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;