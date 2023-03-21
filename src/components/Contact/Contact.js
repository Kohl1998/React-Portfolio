import React from "react";
<<<<<<< HEAD
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
=======
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import "./Contact.css";
import { useState } from "react";


function Contact() {
    
const handleChange = (e) => {
setFormData({
    ...formData, [e.target.name]: e.target.value
})
    }

    const handleSubmit = (e) => {
        {/* prevents page from submitting information */}
        e.preventDefault();
    } 
    
    /* state to hold user information */
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    
    return (
        <div>
            <Header />
            <h2>Reach out to me by clicking icons links in the footer</h2>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
            <textarea type="text" placeholder="Enter your message" name="message" value={formData.message} onChange={handleChange}  cols="10" rows="30" />
            <button type="submit" className="btn">submit</button>
            </form>
            </div>
            <Footer />
>>>>>>> 4e0c2e15ce2f9c1be90401041a43c604434140b5
        </div>
    )
}

export default Contact