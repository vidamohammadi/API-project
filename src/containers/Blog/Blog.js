import React, { Component } from 'react'
import './Blog.css'
import axios from 'axios'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import FullPost from '../../components/FullPost/FullPost'

class Blog extends Component {

    state = {
        posts: [],
        selectPostId : null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const posts = response.data.slice(0, 8)
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: '\"vida\"'
                }
            })
            this.setState({ posts: updatedPosts })
        })
    }

    selectPostHandler = (id) => {
            this.setState({selectPostId : id })
    }

    render() {
        const post = this.state.posts.map((post) => {
            return (
                <Post key={post.id} title={post.title} author={post.author} click={() => this.selectPostHandler(post.id)} />
            )
        })

        return (
            <div>
                <div className="center" style={{ flexFlow: "wrap" }}>
                    {post}
                </div>
                <div className="center">
                    <FullPost id={this.state.selectPostId} title="titleee" content="contentt"/>
                </div>
                <div className="center">
                    <NewPost />
                </div>
            </div>
        )
    }
}

export default Blog
