import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Promises</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
