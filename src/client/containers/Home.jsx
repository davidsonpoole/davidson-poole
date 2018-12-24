import React, { Component } from 'react';
import styles from './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                <div className={styles.center}>
                    <h1>
                        Hi, I'm Davidson.
                    </h1>
                    <h2>I'm a web developer, musician, and college student.</h2>
                </div>
            </div>
        );
    }
}

export default Home;