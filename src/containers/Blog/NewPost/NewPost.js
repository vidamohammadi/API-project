import React, { useState } from 'react'
import axios from '../../../axios'
import './NewPost.css'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import { Redirect } from 'react-router-dom'

const NewPost = () => {
    const[post, setPost] = useState({
        id : '',
        title : '',
        content : '',
        auther : '',
        submitted: false
    })

    const postDataHandler = () =>{
        const data = {
            title: post.title,
            body : post.content,
            auther : post.auther
        }
        axios.post('/posts', data).then((response) => {
            console.log(response)
            alert('this post added and you can check how it work in consol.')
            setPost({submitted : true})
            console.log(post.submitted)
        })
    }

    let redirect = null

    if(post.submitted){
        redirect = <Redirect to="/" />
    }

    return (
        <div className="newPost">
            {redirect}
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
