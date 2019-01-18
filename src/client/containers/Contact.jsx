import React, { Component } from 'react'
import styles from './Contact.css'
import { Input, Button } from 'antd'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        const { visible } = this.state;
        const { TextArea } = Input;
        return (
            <div className={styles.home}>
                { !visible ? (
                <div className={styles.container}>
                    <h1>Want to collaborate?</h1>
                    <Button icon="right" onClick={() => this.setState({ visible: true })}>Send me a message</Button>
                </div>
                    ) : null }
                {visible ? (
                    <div className={styles.inputs}>
                        <h1>Great!</h1>
                        <Input placeholder="Name" visible="false"/>
                        <Input placeholder="Subject" />
                        <TextArea placeholder="Message" />
                        <Button type="primary" onClick={() => alert("You sent the email!")}>Send</Button>
                    </div>
                ) : null }

            </div>
        )
    }
}

export default Contact;
