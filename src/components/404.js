import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function ErrorPage({ darkmode }) {
    return (
        <Container className="d-flex align-items-center justify-content-center flex-column min-vh-100">
            <h2 className={darkmode?"text-white":"text-black"} style={{fontSize: "100px"}}>Oops!</h2>
            <p className={darkmode?"text-white":"text-black"} style={{fontSize: "25px"}}>We can't find the page you're looking for!</p>
            <p className={darkmode?"text-white":"text-black"} >Error code: 404</p>
            <Button href="/">Go back</Button>
        </Container>
    )
}
