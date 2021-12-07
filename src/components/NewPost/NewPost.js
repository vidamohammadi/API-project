import React, { useState } from 'react'
import './NewPost.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const NewPost = () => {
    const[post, setPost] = useState({
        id : '',
        title : '',
        content : '',
        auther : ''
    })
    return (
        <div className="newPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <Input name="input" value={post.title} onChage={(event) => setPost({title: event.target.value})}/>
                <label>Content</label>
                <Input name="texteara" value={post.content} onChage={(event) => setPost({content: event.target.content})}/>
                <label>Auther</label>
                <Input name="input" value={post.auther} onChage={(event) => setPost({auther: event.target.auther})}/>
                <Button value="Add Post"/>
        </div>
    )
}

export default NewPost
