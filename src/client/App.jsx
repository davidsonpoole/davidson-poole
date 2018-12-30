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
                <Layout>
                    <link href='https://fonts.googleapis.com/css?family=Bellefair' rel='stylesheet' />
                    <Header className={styles.header}>
                        <div className={styles.logoContainer}>
                            <Link to="/" onClick={ () => Menu.props.selectedKeys = []}>
                                <div className={styles.logo}>Davidson Poole</div>
                            </Link>
                        </div>
                        <Menu theme="light" mode="horizontal" className={styles.menu}>
                            <Item key="1"><Link to="/about">About Me</Link></Item>
                            <Item key="2"><Link to="/resume">Resume</Link></Item>
                            <Item key="3"><Link to="/blog">Blog</Link></Item>
                            <Item key="4"><Link to="/contact">Contact</Link></Item>
                        </Menu>
                    </Header>
                    <Content className={styles.content}>
                        <div className={styles.contentDiv}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/resume" component={Resume} />
                                <Route path="/blog" component={Blog} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer className={styles.footer}>Davidson Poole &copy; 2018</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;
