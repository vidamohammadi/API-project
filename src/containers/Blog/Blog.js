import React, { Component } from 'react'
import './Blog.css'
import Posts from './posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'
import { Route, Link, Switch } from 'react-router-dom'

class Blog extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/new-post">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                    <Route render={() => <h2 style={{textAlign: 'center' , marginTop:"100px"}}>Not Found</h2>} />
                </Switch>
            </div>
        )
    }
}

export default Blog
