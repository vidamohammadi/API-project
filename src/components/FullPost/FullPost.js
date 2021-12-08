import React, { Component } from 'react'
import './FullPost.css'
import Button from '../UI/Button/Button'
import axios from '../../axios'

class FullPost extends Component {
    state={
        loadedPost : null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id ))
            axios.get(`/posts/${this.props.id}`).then((response) => {
                this.setState({loadedPost : response.data})
            })
        }
    }
    deletePostHandler = () =>{
        axios.delete(`/posts/${this.props.id}`).then((response) => {
            console.log(response)
        })
    }
    render() {
        let post = <p>Please select a Post !</p>
        if (this.props.id) {
            post = <p>Loading...</p>
        }
        if(this.state.loadedPost){
            post = (
                <div className="fullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <Button value="Delete" onClick={this.deletePostHandler}/>
                </div>
            )
        }
        return post
    }
}

export default FullPost
