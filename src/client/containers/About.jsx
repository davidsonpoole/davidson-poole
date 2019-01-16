import React, { Component } from 'react';
import { Button } from 'antd'
import styles from './About.css';
import logo from '../images/profilePic.jpg';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                <div className={styles.center}>
                    <img src={logo} className={styles.logo} alt=""/>
                    <div>
                        <h1 className={styles.opener}>
                            Hi, I'm Davidson.
                        </h1>
                        <p className={styles.aboutP}>
                            I was born and raised in Bonaire, GA, an unincorporated town in central Georgia.
                            Even when I was young, I was fascinated with computers. I spent hours (unsuccessfully) trying to install
                            custom firmware on my PSP, just so that I could say I "hacked my PSP". I worked tirelessly trying to
                            jailbreak my iPod Touch 4th Gen (this time successfully), so that I could install custom icons and add new
                            features. When I was 13, I "made" (using a template) a website for me and my friends to communicate on and
                            share new music that we heard. At the same time, I started learning guitar. Music quickly became a hobby of
                            mine. I started trying to mimic sounds with my guitar, starting with classic rock, and eventually moving to
                            blues and jazz. I struggled for a while as to what I wanted to pursue with my career, and decided that I would
                            continue to play music as a hobby, and work on developing code as my job. I started learning ReactJS in December
                            of 2018, and I loved it. I made this website so I could share my progress with you.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
