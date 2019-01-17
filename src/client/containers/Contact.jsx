import React, { Component } from 'react'
import styles from './Contact.css'
import { Input, Button, Icon } from 'antd'

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.container}>
                    <h1>Want to collaborate?</h1>
                    <p><Icon type="right" />Send me a message</p>
                </div>
                <div className={styles.inputs}>
                    <Input placeholder="Name"/>
                    <Input placeholder="Subject" />
                    <Input placeholder="Message" />
                </div>
            </div>
        )
    }
}

export default Contact;
