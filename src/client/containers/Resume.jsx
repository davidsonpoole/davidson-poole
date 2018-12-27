import React, { Component } from 'react'
import styles from './Resume.css'

class Resume extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.home}>
                <img className={styles.resume} src={'./resume.jpg'} alt="" />
            </div>
        )
    }
}

export default Resume;
