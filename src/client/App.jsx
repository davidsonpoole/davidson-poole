import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import About from './containers/About';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Blog from './containers/Blog';
import styles from './App.css';
import Contact from "./containers/Contact"

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout className={styles.container}>
                    <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab" rel="stylesheet" />
                    <Header className={styles.header}>
                        <div className={styles.logoContainer}>
                            <Link to="/" onClick={ () => Menu.props.selectedKeys = []}>
                                <div className={styles.logo}>Davidson Poole</div>
                            </Link>
                        </div>
                        <Menu theme="light" mode="horizontal" className={styles.menu}>
                            <Item className={styles.item} key="1" ><Link to="/about">About Me</Link></Item>
                            <Item className={styles.item} key="2"><Link to="/resume">Resume</Link></Item>
                            <Item className={styles.item} key="3"><Link to="/blog">Blog</Link></Item>
                            <Item className={styles.item} key="4"><Link to="/contact">Contact</Link></Item>
                        </Menu>
                    </Header>
                    <Content className={styles.content}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/resume" component={Resume} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </Content>
                    <Footer className={styles.footer}>Davidson Poole &copy; 2018. Made with ReactJS and Antd</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
