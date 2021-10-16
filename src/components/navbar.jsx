import React from 'react';
import NavBarItem from './navbaritem'
import {Container, Nav, Navbar as NavbarBootstrap, NavDropdown} from 'react-bootstrap'

function Navbar() {

    return (

        // <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
        //     <div className="container-flud">
        //         <a href="https://localhost:3000/" className="navbar-brand">Boa Entrega App</a>
        //         <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarResponsive">
        //             <ul className="navbar-nav me-auto">
                        
        //                 <NavBarItem href="#/home" label="Home"/>
                        
        //                 <NavBarItem href="#/cadastro-usuarios" label="Usuarios"/>

        //                 <NavBarItem href="#/pedidos" label="Acompanhamento de Pedidos"/>

        //                 <NavBarItem href="#/login" label="Login"/>
                       
        //             </ul>

        //         </div>
        //     </div>
        // </div>
        <NavbarBootstrap collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
          <NavbarBootstrap.Brand href="#home">Boa Entrega App</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#cadastro-usuarios">Usuários</Nav.Link>
              <Nav.Link href="#pedidos">Acompanhamento de Pedidos</Nav.Link>
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