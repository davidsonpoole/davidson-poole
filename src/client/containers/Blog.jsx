import React, { Component } from 'react'
import styles from './Blog.css'
class Blog extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>Blog</h1>


            </div>
        )
    }
}

export default Blog;
