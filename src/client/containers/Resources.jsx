import React, { Component } from 'react'
import styles from './Resources.css'

class Resources extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>Resources</h1>
            </div>
        )
    }
}

export default Resources;
