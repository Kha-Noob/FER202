import React from "react";
import { Navbar, Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">MovieProject</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/account">Account</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-3" onSubmit={(e)=>e.preventDefault()}>
            <Form.Control type="search" placeholder="Quick search" className="me-2" />
            <Button variant="outline-info" type="submit">Search</Button>
          </Form>

          <Nav>
            <Nav.Link title="Favourites"><i className="bi bi-heart"></i></Nav.Link>
            <Nav.Link title="Login"><i className="bi bi-box-arrow-in-right"></i></Nav.Link>
            <NavDropdown title={<span><i className="bi bi-person-circle me-1"></i>Account</span>} align="end">
              <NavDropdown.Item>Manage Your Profiles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">Build your Account</NavDropdown.Item>
              <NavDropdown.Item>Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
