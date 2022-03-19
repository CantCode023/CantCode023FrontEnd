import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function ErrorPage() {
    return (
        <Container className="d-flex align-items-center justify-content-center flex-column min-vh-100">
            <h2 style={{fontSize: "100px"}}>Oops!</h2>
            <p style={{fontSize: "25px"}}>We can't find the page you're looking for!</p>
            <p>Error code: 404</p>
            <Button href="/">Go back</Button>
        </Container>
    )
}
