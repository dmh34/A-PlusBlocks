import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Form, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

interface HeaderState {
  isToggleOn: boolean
}

export default class Header extends Component<{}, HeaderState>{
  handleClick(): void {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
          <Container fluid={true}>
            <Row>
              <Col lg={12} >
                <Navbar variant="light" expand="md">
                  <Navbar.Brand>A+ Blocks</Navbar.Brand>
                  <Navbar.Collapse>
                    <Nav>
                      <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                      <Nav.Link><Link to='/About'></Link></Nav.Link>
                    </Nav>
                    <Form>
                      <Button className="outline-success">Sign In</Button>
                    </Form>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
    );
  }
}
