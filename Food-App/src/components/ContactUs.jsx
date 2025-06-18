import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle form submission (e.g., send to API)
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact <span className="highlight">Us</span></h1>
          <p className="contact-subtitle">We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: <a href="mailto:support@foodie.com">support@foodie.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Address: 123 Foodie Lane, Flavor Town, USA</p>
            <div className="contact-map">
              {/* Map placeholder - replace with an embedded map if desired */}
              <div className="map-placeholder">Map Coming Soon</div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <h2>Send Us a Message</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
            />
            <button type="submit" className="contact-btn">Send Message</button>
            {submitted && <div className="contact-success">Thank you for reaching out! We'll get back to you soon.</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 