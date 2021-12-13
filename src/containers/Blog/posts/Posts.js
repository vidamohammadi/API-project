import React, { Component } from 'react'
import './Posts.css'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import { Link } from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: [],
        selectPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.slice(0, 8)
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: '"vida"'
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
        this.setState({ selectPostId: id })
    }
    render() {
        let post = <p>Fetching data failed!</p>
        if (!this.state.error) {
            post = this.state.posts.map((post) => {
                return (
                    <Link to={`/${post.id}`} key={post.id} >
                        <Post title={post.title} author={post.author} click={() => this.selectedPost(post.id)} />
                    </Link>
                )
            })
        }
        return (
            <div className="center" style={{ flexFlow: "wrap" }}>
                {post}
            </div>
        )
    }
}

export default Posts
