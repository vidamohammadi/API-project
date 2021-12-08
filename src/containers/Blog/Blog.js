import React, { Component } from 'react'
import './Blog.css'
import axios from 'axios'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import FullPost from '../../components/FullPost/FullPost'

class Blog extends Component {

    state = {
        posts: [],
        selectPostId : null,
        error : false
    }

    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 8)
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: '\"vida\"'
                }
            })
            this.setState({ posts: updatedPosts })
        })
        .catch((err) => {
            this.setState({
                error: true
            })
        })
    }

    selectedPost = (id) => {
        this.setState({selectPostId : id })
    }

    render() {
        let post = <p>Fetching data failed!</p>
        if(!this.state.error){
            post = this.state.posts.map((post) => {
                return (
                    <Post key={post.id} title={post.title} author={post.author} click={() => this.selectedPost(post.id)} />
                )
            })
        }

        return (
            <div>
                <div className="center" style={{ flexFlow: "wrap" }}>
                    {post}
                </div>
                <div className="center">
                    <FullPost id = {this.state.selectPostId} />
                </div>
                <div className="center">
                    <NewPost />
                </div>
            </div>
        )
    }
}

export default Blog
