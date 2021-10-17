import React from 'react';
import NavBarItem from './navbaritem'
import {Container, Nav, Navbar as NavbarBootstrap, NavDropdown} from 'react-bootstrap'

function Navbar() {

    return (

        <NavbarBootstrap collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
          <NavbarBootstrap.Brand href="#home">Boa Entrega App</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#cadastro-usuarios">Usuários</Nav.Link>
              <Nav.Link href="#pedidos">Acompanhamento de Entregas</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
          </NavbarBootstrap.Collapse>
          </Container>
        </NavbarBootstrap>
    )
}
export default Navbar