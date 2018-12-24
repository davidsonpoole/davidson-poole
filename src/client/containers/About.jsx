import React, { Component } from 'react';
import { Button } from 'antd'
import styles from './About.css';
import logo from '../profilePic.jpg';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.home}>
                <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                <div className={styles.center}>
                    <img src={ logo } className={ styles.logo } alt=""></img>
                    <h1>
                        Hi, I'm Davidson.
                    </h1>
                    <p>
                        I'm a web developer, musician, and college student. I'm just gonna start typing random stuff
                        so that I can get an idea of how I want the page to look. Some people do this with
                        Lorem ipsum, which is just a meaningless language to be a placeholder for text,
                        but I wanted to write it myself because I don't feel like googling it. So far this is pretty
                        long but I think I want it a little longer so I am going to keep talking. This is a train
                        car with 5 cars on the back, but I wanted a long train that keeps you stopped in your
                        car at the railroad tracks for at least 10 minutes. Well, this is probably good enough
                        so now I'm gonna render the page. After I looked at this page and started designing it
                        more I think this will be the About Me page. Which leaves me wondering how I want the Home
                        page to be, but no worries- that will happen in time. Now I just need to keep typing and
                        typing, so the reader knows more and more about me, and so that the page fills up ever so
                        slowly. I just want this to be a page length biography of my life, which I will eventually
                        replace this with. I don't know if this is long enough or what, but I might as well keep
                        talking so that I can see the page better. Maybe I could change the padding more so that the
                        text appears longer, but I kind of like how it is now. I guess I will just have to write more.
                    </p>
                    <div className={styles.aboutMe}>
                        <h3>I'm going to put a button below this.</h3>
                        <Button type="default" size="large">Button</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
