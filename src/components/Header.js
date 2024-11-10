import React, { Component } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="md">
          <Container>
            <Navbar.Brand href="/">HollowEngine Docs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/getting-started">Getting Started</Nav.Link>
                <Nav.Link href="/examples">Examples</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}