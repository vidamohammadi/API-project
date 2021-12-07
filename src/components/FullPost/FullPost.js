import React from 'react'
import './FullPost.css'
import Button from '../UI/Button/Button'
const FullPost = (props) => {
    let post = <p>Please select a Post !</p>
    if(props.id){
        post = (
            <div className="fullPost">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <Button value="Delete" />
            </div>
        )
    }
    return post
}

export default FullPost
