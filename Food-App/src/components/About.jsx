import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About <span className="highlight">Foodie</span></h1>
          <p className="about-subtitle">Your Ultimate Recipe Discovery Platform</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cooking ingredients"
            />
          </div>

          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Foodie was born from a simple idea: to make cooking accessible, enjoyable, and inspiring for everyone. 
              Whether you're a seasoned chef or just starting your culinary journey, we're here to help you discover 
              and create amazing dishes from around the world.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🍳</div>
                <h3>Easy Recipes</h3>
                <p>Step-by-step instructions for every skill level</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🌍</div>
                <h3>Global Cuisine</h3>
                <p>Discover recipes from every corner of the world</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👥</div>
                <h3>Community</h3>
                <p>Join a community of food lovers and share your creations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Recipes</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100+</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>

        <div className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/mypic.png" alt="Founder & CEO" />
              </div>
              <h3>Saeed Ali</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/hanzala.jpeg" />
              </div>
              <h3>Hanzala Memon</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/hamza.jpeg" />
              </div>
              <h3>Hamza Raza</h3>
              <p>Content Director</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h2>Join Our Community</h2>
          <p>Start your culinary journey with Foodie today</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About; 