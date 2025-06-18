import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <section className="terms-section">
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">Terms of <span className="highlight">Service</span></h1>
          <p className="terms-subtitle">Please read these terms carefully before using our website.</p>
        </div>
        <div className="terms-content">
          <h2>1. Introduction</h2>
          <p>Welcome to Foodie! By accessing or using our website, you agree to be bound by these Terms of Service.</p>

          <h2>2. Acceptance of Terms</h2>
          <p>By using our services, you acknowledge that you have read, understood, and agree to these terms. If you do not agree, please do not use our website.</p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to use our website lawfully and respectfully. You are responsible for any content you submit and must not violate any applicable laws or regulations.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content on Foodie, including text, images, logos, and designs, is the property of Foodie or its licensors and is protected by copyright and other laws.</p>

          <h2>5. Termination</h2>
          <p>We reserve the right to suspend or terminate your access to our website at any time, without notice, for conduct that we believe violates these terms or is harmful to other users.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Foodie is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our website.</p>

          <h2>7. Changes to Terms</h2>
          <p>We may update these Terms of Service from time to time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of those changes.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@foodie.com">support@foodie.com</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService; 