import React, { Component } from 'react'
import styles from './Blog.css'
import { Input, Button, Row, Col, Comment, List } from 'antd'

const { TextArea } = Input;
class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areComments: false
        }
    }

    render() {
        const { areComments } = this.state;
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>Blog</h1>
                <Col>
                    <Input placeholder="Name" style={{ width: 200}} />
                    <br />
                    <TextArea className={styles.input} rows={5} placeholder="What's on your mind?"></TextArea>
                </Col>
                <Col>
                    <br />
                    <Row>
                        <Button type="primary">Post</Button>
                    </Row>
                    <hr />
                    { areComments ? (
                        <List>
                            <Comment>Hello</Comment>
                        </List>
                    ) : ''}
                </Col>
            </div>
        )
    }
}

export default Blog;
