import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          Discover Delicious <span className="highlight">Recipes</span>
        </h1>
        <p className="banner-subtitle">
          Find and share the best recipes from around the world
        </p>
        <div className="banner-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Recipes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5K+</span>
            <span className="stat-label">Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1K+</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
        <div className="banner-actions">
          <button className="primary-btn">Explore Recipes</button>
          <button className="secondary-btn">Share Recipe</button>
        </div>
      </div>
      <div className="banner-image">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Delicious Food"
        />
      </div>
    </div>
  );
};

export default Banner; 