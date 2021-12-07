import React from 'react'
import './FullPost.css'
import Button from '../UI/Button/Button'
const FullPost = () => {
    let post = <p>Please select a Post !</p>
    post = (
        <div className="fullPost">
            <h1>Title</h1>
            <p>Content</p>
            <Button value="Delete" />
        </div>
    )
    return post
}

export default FullPost
