import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <section className="cookie-section">
      <div className="cookie-container">
        <div className="cookie-header">
          <h1 className="cookie-title">Cookie <span className="highlight">Policy</span></h1>
          <p className="cookie-subtitle">Learn how we use cookies to enhance your experience on Foodie.</p>
        </div>
        <div className="cookie-content">
          <h2>1. Introduction</h2>
          <p>This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies on Foodie.</p>

          <h2>2. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device by your web browser. They help websites remember information about your visit, making your next visit easier and the site more useful to you.</p>

          <h2>3. How We Use Cookies</h2>
          <p>We use cookies to personalize content, analyze site traffic, and improve your experience. Some cookies are essential for the website to function properly.</p>

          <h2>4. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to operate.</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings.</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads to you.</li>
          </ul>

          <h2>5. Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of those changes.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us at <a href="mailto:support@foodie.com">support@foodie.com</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy; 