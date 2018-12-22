import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import Home from './containers/Home';
import styles from './App.css';
import logo from './profilePic.jpg';

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
                    <Header className={styles.header}>
                        <div className={styles.logoContainer}>
                            <Link to="/">
                                <img className={styles.logo} src={ logo } alt="" />
                            </Link>
                        </div>
                        <Menu theme="light" mode="horizontal" className={styles.menu}>
                            <Item key="1">About Me</Item>
                            <Item key="2">Resume</Item>
                            <Item key="3">Helpful Resources</Item>
                            <Item key="4">Contact</Item>
                        </Menu>
                    </Header>
                    <Content className={styles.content}>
                        <div className={styles.contentDiv}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer className={styles.footer}>Davidson Poole copyright 2018</Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;