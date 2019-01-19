import React, { Component } from 'react'
import styles from './Contact.css'
import { Input, Button } from 'antd'
import axios from 'axios'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            messageInput: ''
        }

        this.nameInput = React.createRef()
        this.subjectInput = React.createRef()
        this.handleChange = this.handleChange.bind(this)
        this.send = this.send.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState(prevState => ({ messageInput: e.target.value}))
    }

    send() {
        const name = this.nameInput.current.input.value;
        const subject = this.subjectInput.current.input.value;
        const message = this.state.messageInput;
        if (name && subject && message) {
            const body = {
                name,
                subject,
                message
            }
            axios.post('http://localhost:8000/api/send', JSON.stringify({
                name: body.name,
                subject: body.subject,
                message: body.message
            }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(result => {
                    console.log(result)
                    // TODO redirect user after successful post
                    this.setState({ messageInput: '' })
                    this.nameInput.current.input.value = ''
                    this.subjectInput.current.input.value = ''
                })
                .catch(error => {
                    console.log(error)
                })
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
                        <Input placeholder="Name" ref={this.nameInput} visible="false"/>
                        <Input placeholder="Subject" ref={this.subjectInput} />
                        <TextArea placeholder="Message" onChange={this.handleChange} />
                        <Button type="primary" onClick={this.send}>Send</Button>
                    </div>
                ) : null }

            </div>
        )
    }
}

export default Contact;
