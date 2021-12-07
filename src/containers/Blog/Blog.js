import React from 'react'
import Post from '../../components/Post/Post'
import NewPost from '../../components/NewPost/NewPost'
import FullPost from '../../components/FullPost/FullPost'

const Blog = () => {
    return (
        <React.Fragment>
            <div>
                <Post />
            </div>
            <div>
                <FullPost />
            </div>
            <div>
                <NewPost />
            </div>
        </React.Fragment>
    )
}

export default Blog
