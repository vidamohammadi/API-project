import React from 'react'
import './Post.css'
const Post = (props) => {
    return (
        <article className="post">
            <h2>{props.title}</h2>
            <div>
                <div className="author">{props.author}</div>
            </div>
        </article>
    )
}

export default Post
