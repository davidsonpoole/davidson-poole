import React, { Component } from 'react';
import styles from './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.container}>
                    <div className={styles.area} style={{ padding: '150px 50px'}}>
                        <h2 style={{ fontWeight: 'bold', fontFamily: 'Zilla Slab, serif', fontSize: '50px'}}>Developer, Musician, and Writer</h2>
                        <h2 style={{ fontFamily: 'Quicksand, sans-serif'}}>I love to design websites, play guitar, and learn new things</h2>
                    </div>
                </div>
                <div className={styles.container} style={{ backgroundColor: "#b9c1ce" }}>
                    <h1 className={styles.header} style={{ color: "white", fontSize: "35px" }}>Languages and Frameworks:</h1>
                    <div className={styles.area}>
                        <p className={styles.p} style={{ color: "white", fontSize: "40px" }}>Java, React.js, Javascript, Express,
                        Node.js, CSS, Git</p>
                    </div>
                </div>
                <div className={styles.container} style={{ backgroundColor: "#35ce4c" }}>
                    <h1 className={styles.header} style={{ color: "white", fontSize: "35px" }}>Personal Projects</h1>
                    <div className={styles.area}>
                        <p className={styles.p} style={{ color: "white", fontSize: "40px" }}>Set up a minecraft server once<br /> www.github.com</p>
                    </div>
                </div>
                <div className={styles.container} style={{ backgroundColor: "#ff8a54" }}>
                    <h1 className={styles.header} style={{ color: "white", fontSize: "35px" }}>What I want this website to be:</h1>
                    <div className={styles.area}>
                        <p className={styles.p} style={{ color: "white", fontSize: "25px" }}>I decided to create this website to be a record of my development
                        progress. This is my blank canvas for new ideas. If I want to learn a new web feature, I will try to implement it here first.
                            Additionally, I want to use this as a forum for my thoughts and recordings. I'm going to add a media player later on so that I can
                            post music.
                        </p>
                    </div>
                </div>
                <div className={styles.container} style={{ backgroundColor: "#626363" }}>
                    <h1 className={styles.header} style={{ color: "white", fontSize: "35px" }}>Helpful Resources</h1>
                    <div className={styles.area}>
                        <ul className={styles.ul}>
                            <li><a className={styles.link} href="https://www.w3schools.com/tags/ref_urlencode.asp" target="_blank">
                                URL Encodings</a></li>
                            <li><a className={styles.link} href="https://www.restapitutorial.com/httpstatuscodes.html" target="_blank">
                            HTTP Status Codes</a></li>
                            <li><a className={styles.link} href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">
                                A Complete Guide to Flexbox</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
