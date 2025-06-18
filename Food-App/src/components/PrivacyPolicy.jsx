import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1 className="privacy-title">Privacy <span className="highlight">Policy</span></h1>
          <p className="privacy-subtitle">Your privacy is important to us. This policy explains how we handle your information.</p>
        </div>
        <div className="privacy-content">
          <h2>1. Introduction</h2>
          <p>Welcome to Foodie! This Privacy Policy describes how we collect, use, and protect your personal information when you use our website.</p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information such as your name, email address, and any other details you provide when you contact us, subscribe to our newsletter, or interact with our services.</p>

          <h2>3. How We Use Your Information</h2>
          <p>Your information is used to provide and improve our services, respond to your inquiries, send newsletters, and enhance your experience on our platform.</p>

          <h2>4. Cookies</h2>
          <p>We use cookies to personalize your experience, analyze site traffic, and improve our services. You can control cookies through your browser settings.</p>

          <h2>5. Third-Party Links</h2>
          <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.</p>

          <h2>6. Data Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@foodie.com">support@foodie.com</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 