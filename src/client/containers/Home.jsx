import React, { Component } from 'react';
import styles from './Home.css';
import { Button, Row, Col } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                <div className={styles.container}>
                        <h1 className={styles.h1}>This is the Home Page.</h1>
                </div>


                <div className={styles.content}>

                    <Col>
                        <Row className={styles.row}><Button type="default" size={"large"} className={styles.button} onClick={ () => alert("You clicked the first button!")}>First button</Button></Row>
                        <Row className={styles.row}><Button type="default" size={"large"} className={styles.button} onClick={ () => alert("You clicked the second button!")}>Second button</Button></Row>
                        <Row className={styles.row}><Button type="default" size={"large"} className={styles.button} onClick={ () => alert("You clicked the third button!")}>Third button</Button></Row>
                    </Col>
                    <p className={styles.p}>Blah blah blah blah blah, I am just randomly typing text so that I can get a good idea of how the page looks. I will
                    explain what it will be like if we live 50 years in the future. AI will basically make life so convenient for
                    everyone that it will start to control us. Spotify will no longer be recommended songs based on your interests,
                    they would be giving you the interests that you have. There will be so much data on you that companies
                    (if there aren't laws against it) will have the power to predict your thoughts. They could listen in on your conversations and give you a
                    "personality profile." This profile could then be used to find you a partner in a relationship, or find music you enjoy, or find you a job,
                    or even choosing your career for you when you are in elementary school. The future will rely on data, because of the endless possibilities.
                    Well, maybe this is long enough now so I'm gonna render the page. This page isn't long enough so I might just copy what I wrote above. Or
                    not. I don't really know what I'm doing right now other than typing. It's like a stream of consciousness. I don't think about what I'm typing
                    it just comes out. Which is another thing. I'm really thankful that I learned how to type in middle school. I used an old program that made
                    little games out of typing, and when I started it, I wanted to be the best at it. I practiced that every day, learning how to type faster
                    and faster and how to type without looking at the keys. Most students in the class would stop after 30 minutes and play an old game called
                    Oregon Trail, but not me- I wanted to type. Now, I can't remember the last time I actually looked at the keys as I was typing. My fingers
                    have the location of almost every key memorized, so I can proofread what I'm writing as I type it. It is pretty neat. Great story. Now I will
                    render the page and see if I have accomplished my goal. Blah blah blah blah blah, I am just randomly typing text so that I can get a good idea of how the page looks. I will
                        explain what it will be like if we live 50 years in the future. AI will basically make life so convenient for
                        everyone that it will start to control us. Spotify will no longer be recommended songs based on your interests,
                        they would be giving you the interests that you have. There will be so much data on you that companies
                        (if there aren't laws against it) will have the power to predict your thoughts. They could listen in on your conversations and give you a
                        "personality profile." This profile could then be used to find you a partner in a relationship, or find music you enjoy, or find you a job,
                        or even choosing your career for you when you are in elementary school. The future will rely on data, because of the endless possibilities.
                        Well, maybe this is long enough now so I'm gonna render the page. This page isn't long enough so I might just copy what I wrote above. Or
                        not. I don't really know what I'm doing right now other than typing. It's like a stream of consciousness. I don't think about what I'm typing
                        it just comes out. Which is another thing. I'm really thankful that I learned how to type in middle school. I used an old program that made
                        little games out of typing, and when I started it, I wanted to be the best at it. I practiced that every day, learning how to type faster
                        and faster and how to type without looking at the keys. Most students in the class would stop after 30 minutes and play an old game called
                        Oregon Trail, but not me- I wanted to type. Now, I can't remember the last time I actually looked at the keys as I was typing. My fingers
                        have the location of almost every key memorized, so I can proofread what I'm writing as I type it. It is pretty neat. Great story. Now I will
                        render the page and see if I have accomplished my goal. Blah blah blah blah blah, I am just randomly typing text so that I can get a good idea of how the page looks. I will
                        explain what it will be like if we live 50 years in the future. AI will basically make life so convenient for
                        everyone that it will start to control us. Spotify will no longer be recommended songs based on your interests,
                        they would be giving you the interests that you have. There will be so much data on you that companies
                        (if there aren't laws against it) will have the power to predict your thoughts. They could listen in on your conversations and give you a
                        "personality profile." This profile could then be used to find you a partner in a relationship, or find music you enjoy, or find you a job,
                        or even choosing your career for you when you are in elementary school. The future will rely on data, because of the endless possibilities.
                        Well, maybe this is long enough now so I'm gonna render the page. This page isn't long enough so I might just copy what I wrote above. Or
                        not. I don't really know what I'm doing right now other than typing. It's like a stream of consciousness. I don't think about what I'm typing
                        it just comes out. Which is another thing. I'm really thankful that I learned how to type in middle school. I used an old program that made
                        little games out of typing, and when I started it, I wanted to be the best at it. I practiced that every day, learning how to type faster
                        and faster and how to type without looking at the keys. Most students in the class would stop after 30 minutes and play an old game called
                        Oregon Trail, but not me- I wanted to type. Now, I can't remember the last time I actually looked at the keys as I was typing. My fingers
                        have the location of almost every key memorized, so I can proofread what I'm writing as I type it. It is pretty neat. Great story. Now I will
                        render the page and see if I have accomplished my goal.</p>
                </div>
            </div>
        )
    }
}

export default Home;
