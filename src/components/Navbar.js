import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useAuth0 } from '@auth0/auth0-react'

export default function NavBar({ changeTheme, darkmode }) {
    const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <Navbar collapseOnSelect expand="lg" bg={darkmode?"dark":"light"} variant={darkmode?"dark":"light"}>
            <Container>
                <Navbar.Brand className="fs-3" style={{fontWeight:"500"}} href="/"><a className="text-primary text-decoration-none">Cant</a>Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <Nav.Link className={darkmode?"text-white":"text-black"} href="/projects">Projects</Nav.Link>
                        <Nav.Link className={darkmode?"text-white":"text-black"} href="/discussions">Discussions</Nav.Link>
                        <Nav.Link className={darkmode?"text-white":"text-black"} href="/contact">Contact</Nav.Link>
                        <Navbar.Text className={darkmode ? 'text-white':'text-black'}>
                            <button onClick={changeTheme} style={{backgroundColor: "rgba(255,255,255,0)", border: "none"}}><FontAwesomeIcon className={`ms-sm-2 ms-0 mb-sm-0 mb-2 ${darkmode ? 'text-white':'text-black'}`} icon={darkmode ? faSun:faMoon} id='okok'/></button>
                        </Navbar.Text>
                        <Button onClick={isAuthenticated?() => logout():() => loginWithRedirect()} variant="outline-primary" className="ms-sm-3 ms-0" style={{width: "100px"}}>{isAuthenticated?"Logout":"Login"}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
