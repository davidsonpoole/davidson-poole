import React, { Component } from 'react'
import styles from './Blog.css'
import { Input, Button, Row, Col, Comment, List, message } from 'antd'
const axios = require('axios')
const moment = require('moment');

const { TextArea } = Input;
class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentInput: '',
            articles: []
        }

        this.blogTitle = React.createRef()
        this.handleChange = this.handleChange.bind(this)
        this.post = this.post.bind(this)
        this.updateArticles = this.updateArticles.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState(prevState => ({ contentInput: e.target.value }))
    }

    componentDidMount() {
        message.config({
            top: 100,
            duration: 5,
            maxCount: 1
        })
        axios.get('http://localhost:8000/api/blogs')
            .then(result => {
                const res = result.data;
                console.log(res);
                this.setState({ articles: res})
            })
            .catch(error => console.log(error))
    }

    updateArticles() {
        axios.get('http://localhost:8000/api/blogs')
            .then(result => {
                const res = result.data;
                console.log(res);
                this.setState({ articles: res})
            })
            .catch(error => console.log(error))
    }

    post() {
        const title = this.blogTitle.current.input.value;
        const content = this.state.contentInput;
        if (title && content) {
            const body = {
                title,
                content
            }
            console.log(body)
            axios.post('http://localhost:8000/api/post', JSON.stringify({
                title: body.title,
                text: body.content
            }),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(result => {
                    console.log(result)
                    message.success('Posted successfully')
                    this.updateArticles()
                    this.setState({ contentInput: '' })
                    this.blogTitle.current.input.value = ''
                })
                .catch(error => {
                    console.log(error)
                    message.error('Unsuccessful')
                })
        }

    }

    render() {
        const { articles } = this.state;
        const articleStore = [];
        const createArticle = i => {
            const article = articles[i];
            return (
                <div className={styles.articles} key={article.id}>
                    <hr />
                    <h1 className={styles.articleTitle}>{article.title}</h1>
                    <p className={styles.articleDate}>{moment(article.createdAt).format("dddd, MMMM Do YYYY")}</p>
                    <p className={styles.articleContent}>{article.text}</p>
                    <br />
                </div>
            )
        }
        for (let i = 0; i < articles.length; i += 1) {
            articleStore.push(createArticle(i))
        }
        return (
            <div className={styles.home}>
                <h1 className={styles.title}>Blog</h1>
                <div className={styles.submit}>
                    <Col>
                        <Input ref={this.blogTitle} placeholder="Name" style={{ width: 200}} />
                        <br />
                        <TextArea onChange={this.handleChange} className={styles.input} value={this.state.contentInput} rows={5} placeholder="What's on your mind?"/>
                    </Col>
                    <Col>
                        <br />
                        <Row>
                            <Button type="primary" onClick={this.post}>Post</Button>
                        </Row>
                        <br />
                    </Col>
                </div>
                { articleStore }

            </div>
        )
    }
}

export default Blog;
