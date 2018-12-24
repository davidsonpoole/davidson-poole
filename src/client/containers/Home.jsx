import React, { Component } from 'react';
import styles from './Home.css';
import { Button } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                <h1>This is the Home Page.</h1>
                <div className={styles.content}>
                    <h2>I will put a few buttons on this Page, and style it with background colors.</h2>
                    <Button type="default">First button</Button>
                    <Button type="primary">Second button</Button>
                    <Button type="default">Third button</Button>
                </div>
            </div>
        )
    }
}

export default Home;
