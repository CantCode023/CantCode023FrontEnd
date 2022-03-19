import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function NavBar({ changeTheme, darkmode }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg={darkmode?"dark":"light"} variant={darkmode?"dark":"light"}>
        <Container>
            <Navbar.Brand href="/">CantCode</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Nav.Link className={darkmode?"text-white":"text-black"} href="/projects">Projects</Nav.Link>
                    <Nav.Link className={darkmode?"text-white":"text-black"} href="/contact">Contact</Nav.Link>
                    <Navbar.Text className={darkmode ? 'text-white':'text-black'}>
                        <button onClick={changeTheme} style={{backgroundColor: "rgba(255,255,255,0)", border: "none"}}><FontAwesomeIcon className={`ms-sm-2 ms-0 mb-sm-0 mb-2 ${darkmode ? 'text-white':'text-black'}`} icon={darkmode ? faSun:faMoon} id='okok'/></button>
                    </Navbar.Text>
                    <Button href="/login" variant="outline-primary" className="ms-sm-3 ms-0" style={{width: "100px"}}>Login</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
