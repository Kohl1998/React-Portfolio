import React from "react";
import Form from 'react-bootstrap/Form';
import Header from "../Header/Header";
import { Button } from "react-bootstrap";

/* [ ] Must have contact information
[ ] Have a contact form for handling events */

function Contact() {
    return (
        <div>
            <Header />
            <h3 style={{ textAlign: 'center', marginTop: '5px' }}>Get in Contact!</h3>
            <div>
                <h6>Contact number</h6>
                <p>07949016797</p>
            </div>
            <div>
                <h6>Email</h6>
                <p>kohlvbusiness98@Gmail.com</p>
            </div>
            <div>
                <h6>Location</h6>
                <p>London, Hackney</p>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact