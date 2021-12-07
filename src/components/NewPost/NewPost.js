import React from 'react'
import './NewPost.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const NewPost = () => {
    return (
        <div className="newPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <Input type="input"/>
                <label>Content</label>
                <Input type="texteara"/>
                <label>Auther</label>
                <Input type="input"/>
                <Button value="Add Post"/>
        </div>
    )
}

export default NewPost
