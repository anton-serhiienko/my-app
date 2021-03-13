import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postElements = props.posts.map( p => <Post message={p.message} likeCount ={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = {type:"UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

    let addPost = () => {
        let action = {type: "ADD-POST"};
        props.dispatch (action);
    }

    return(
        <div className={css.myPosts}>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          ref={ newPostElement }
                          value={props.newPostText} />

                <button onClick={ () => { addPost() }}>Add post</button>
            </div>
            <div className={css.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;