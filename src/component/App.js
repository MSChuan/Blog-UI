import React, { PropTypes } from 'react';
import { Grid, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends React.Component {
    render() {
        const {children} = this.props;
        return (<Grid id="WorkspaceContainer">
                    <Col sm={12}>
                        <div id="TopBarContainer">
                            <span>欢迎</span>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div id="TopImageBarContainer">
                            <div id="LogoContainer"></div>
                            <div id="BlogTitleContainer">
                                <p>WordPPT哥的个人博客</p>
                                <p>进击的攻城狮，程序猿</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <Navbar inverse collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav id='NavBarContainer'>
                                    <NavItem eventKey={1} href="#">首页</NavItem>
                                    <NavItem eventKey={2} href="#">技术分享</NavItem>
                                    <NavItem eventKey={3} href="#">生活点滴</NavItem>
                                    <NavItem eventKey={4} href="#">留言板</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col sm={3}>
                        <div id="LeftAreaContainer">Placeholder</div>
                    </Col>
                    <Col sm={9}>
                        <div id="RightAreaContainer">{children}</div>
                    </Col>
                </Grid>);
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;
