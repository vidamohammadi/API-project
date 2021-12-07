import React from 'react'
import './Blog.css'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import FullPost from '../../components/FullPost/FullPost'

const Blog = () => {
    return (
        <div>
            <div className="center">
                <Post />
                <Post />
            </div>
            <div className="center">
                <FullPost />
            </div>
            <div className="center">
                <NewPost />
            </div>
        </div>
    )
}

export default Blog
