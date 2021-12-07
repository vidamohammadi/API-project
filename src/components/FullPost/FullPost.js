import React from 'react'
import './FullPost.css'
import Button from '../UI/Button/Button'
const FullPost = () => {

    return (
        <div className="fullPost">
            <h1>Title</h1>
            <p>Content</p>
            <Button value="Delete" />
        </div>
    )
}

export default FullPost
