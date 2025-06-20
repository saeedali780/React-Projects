import React, { useState } from 'react';
import FoodItem from './FoodItem';
import './Categories.css';

const API_KEY = '7cb08b3c5ea34b4db7b32c971bafc6f1';
const CUISINES = [
  'African', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European',
  'European', 'French', 'German', 'Greek', 'Indian', 'Irish', 'Italian', 'Japanese',
  'Jewish', 'Korean', 'Latin American', 'Mediterranean', 'Mexican', 'Middle Eastern',
  'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'
];

const Categories = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loadingRecipes, setLoadingRecipes] = useState(false);

  const handleCategoryClick = async (cuisine) => {
    setSelectedCuisine(cuisine);
    setLoadingRecipes(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${encodeURIComponent(cuisine)}&addRecipeInformation=true&number=12&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setRecipes(data.results || []);
    } catch {
      setRecipes([]);
    } finally {
      setLoadingRecipes(false);
    }
  };

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h1 className="categories-title">Recipe Categories</h1>
        <p className="categories-subtitle">Browse recipes by cuisine from around the world</p>
      </div>
      <div className="categories-grid">
        {CUISINES.map((cuisine) => (
          <div
            className={`category-card${selectedCuisine === cuisine ? ' selected' : ''}`}
            key={cuisine}
            onClick={() => handleCategoryClick(cuisine)}
          >
            <span className="category-icon">🍽️</span>
            <span className="category-name">{cuisine}</span>
          </div>
        ))}
      </div>
      {selectedCuisine && (
        <div className="categories-recipes-section">
          <h2 className="categories-recipes-title">{selectedCuisine} Recipes</h2>
          {loadingRecipes ? (
            <div className="categories-loading">Loading recipes...</div>
          ) : recipes.length > 0 ? (
            <div className="food-container">
              {recipes.map((food) => (
                <FoodItem key={food.id} food={food} setFoodId={() => {}} />
              ))}
            </div>
          ) : (
            <div className="categories-loading">No recipes found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories; 