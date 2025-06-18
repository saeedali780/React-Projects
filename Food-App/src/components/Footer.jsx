import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">Foodie</span>
            </div>
            <p className="footer-description">
              Discover and share the best recipes from around the world. Join our community of food lovers and explore thousands of delicious recipes.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link href="#">Recipes</Link></li>
              <li><Link href="#">Categories</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              <li><a href="#">Breakfast</a></li>
              <li><a href="#">Lunch</a></li>
              <li><a href="#">Dinner</a></li>
              <li><a href="#">Desserts</a></li>
              <li><a href="#">Drinks</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="newsletter-text">Subscribe to our newsletter for the latest recipes and cooking tips.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 