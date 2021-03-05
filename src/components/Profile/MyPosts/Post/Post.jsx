import React from "react";
import css from "./Post.module.css"


const Post = () => {
    return(

        <div className={css.item}>
            <img src = "https://i.pinimg.com/originals/93/8b/91/938b91151f7e52e7ac09ddffa6f79a10.png"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>

    );
}

export default Post;