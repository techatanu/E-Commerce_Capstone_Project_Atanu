import React from 'react';
import './Contact.css';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert('Thank you for contacting us!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Whether you have a question, feedback, or need support — we’re here to help.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your email" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Write your message here..." required />
        </label>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Reach Us</h3>
        <p>Email: support@yourstore.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Location: Kolkata, India</p>
      </div>
    </div>
  );
};