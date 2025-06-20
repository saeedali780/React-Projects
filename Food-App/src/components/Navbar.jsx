import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🍽️</span>
          <span className="logo-text">Foodie</span>
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/recipes" className={`nav-link ${location.pathname === '/recipes' ? 'active' : ''}`}>Recipes</Link>
          <Link to="/categories" className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`}>Categories</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>
        <div className="navbar-actions">
          <ThemeToggle />
          <button className="profile-btn">
            <span className="profile-icon">👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 