import React, { useState, useEffect } from 'react';
import './Banner.css';

const API_KEY = '7cb08b3c5ea34b4db7b32c971bafc6f1';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerRecipes = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=food&addRecipeInformation=true&number=10&apiKey=${API_KEY}`
        );
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setRecipes(data.results);
        } else {
          // Fallback recipes if API fails
          setRecipes([
            {
              image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
              title: 'Delicious Food'
            },
            {
              image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
              title: 'Amazing Cuisine'
            },
            {
              image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
              title: 'Tasty Delights'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching banner recipes:', error);
        // Fallback recipes if API fails
        setRecipes([
          {
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Delicious Food'
          },
          {
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            title: 'Amazing Cuisine'
          },
          {
            image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            title: 'Tasty Delights'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerRecipes();
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === recipes.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // 2 seconds

      return () => clearInterval(interval);
    }
  }, [recipes.length]);

  const currentRecipe = recipes[currentImageIndex];

  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          Discover Delicious <span className="highlight">Recipes</span>
        </h1>
        <p className="banner-subtitle">
          {!loading && currentRecipe ? currentRecipe.title : 'Find and share the best recipes from around the world'}
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
        {!loading && currentRecipe && (
          <img 
            src={currentRecipe.image} 
            alt={currentRecipe.title}
            style={{
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        )}
        {loading && (
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Delicious Food"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
