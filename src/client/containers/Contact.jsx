import React, { Component } from 'react'
import styles from './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>Contact</h1>
            </div>
        )
    }
}

export default Contact;
