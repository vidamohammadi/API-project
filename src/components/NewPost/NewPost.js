import React, { useState } from 'react'
import axios from 'axios'
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

    const postDataHandler = () =>{
        const data = {
            title: post.title,
            body : post.content,
            auther : post.auther
        }
        axios.post('/posts', data).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="newPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <Input name="input" value={post.title} onChange={(event) => setPost({title: event.target.value})}/>
                <label>Content</label>
                <Input name="texteara" value={post.content} onChange={(event) => setPost({content: event.target.content})}/>
                <label>Auther</label>
                <Input name="input" value={post.auther} onChange={(event) => setPost({auther: event.target.auther})}/>
                <Button value="Add Post" onClick={postDataHandler}/>
        </div>
    )
}

export default NewPost
