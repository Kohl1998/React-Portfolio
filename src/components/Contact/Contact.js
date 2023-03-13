import React from "react";
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
        </div>
    )
}

export default Contact