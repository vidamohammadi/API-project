import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios'
import './FullPost.css'
class FullPost extends Component {
    state={
        loadedPost : null
    }
    componentDidMount(){
        if(this.props.match.params.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id ))
            axios.get(`/posts/${this.props.match.params.id}`).then((response) => {
                this.setState({loadedPost : response.data})
            })
        }
    }
    deletePostHandler = () =>{
        axios.delete(`/posts/${this.props.match.params.id}`).then((response) => {
            console.log(response)
            alert('this post deleted and you can check how it work in consol.')
        })
    }
    render() {
        let post = <p>Please select a Post !</p>
        if (this.props.match.params.id) {
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
