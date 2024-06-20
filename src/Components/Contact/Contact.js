import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Import your CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/contact/', formData)
            .then(response => {
                console.log(response.data);
                setStatus('Message sent successfully!');
                // Clear the form
                setFormData({
                    username: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(error => {
                console.error(error);
                setStatus('Error sending message. Please try again.');
            });
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Contact Us</h2>
            <p>Have a question or want to get in touch? Fill out the form </p>  
            < div className='contact'>
            <div className='infobox'>
               
                <h2>Contact Info</h2>
                                <ul className="list-info">
                                    <li><i className="fas fa-globe"></i> &nbsp; Mikinduri-Kunati Rd-Meru County.</li>
                                    <li><i className="far fa-envelope"></i> &nbsp; ituuru@gmail.com</li>
                                    <li><i className="fas fa-phone"></i>  &nbsp; +254 719 262 626 </li>
                                    <li><i className="fas fa-phone"></i>  &nbsp; +254 789 221 911 </li>
                                </ul>
                                <ul className="social-icon-four">
                                    <li className="follow">Follow on: </li>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    
                                </ul>
            </div>
            <div className='formbox'>
            {status && <p className="form-status">{status}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;
