import React from 'react'
import './NewPost.css'
const NewPost = () => {
    return (
        <div className="newPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input />
                <label>Content</label>
                <textarea />
                <label>Auther</label>
                <input />
                <button>Add Post</button>
        </div>
    )
}

export default NewPost
