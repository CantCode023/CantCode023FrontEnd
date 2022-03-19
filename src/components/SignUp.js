import React, { useRef } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const password1Ref = useRef();

    return (
        <Container className="d-flex justify-content-center flex-column min-vh-100" style={{maxWidth: "30%"}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form>
                        <Form.Group id="email" className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group className="mb-2" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm" className="mb-4">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={password1Ref} required/>
                        </Form.Group>
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <Button className="w-50" type="submit">Sign up</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <a href="/login">Login.</a>
            </div>
        </Container>
    )
}
