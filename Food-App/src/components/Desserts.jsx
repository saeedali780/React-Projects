import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import './Categories.css';

const API_KEY = '7cb08b3c5ea34b4db7b32c971bafc6f1';

const Desserts = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDessertRecipes = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=dessert&addRecipeInformation=true&number=12&apiKey=${API_KEY}`
        );
        const data = await res.json();
        setRecipes(data.results || []);
      } catch (error) {
        console.error('Error fetching dessert recipes:', error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDessertRecipes();
  }, []);

  const handleSetFoodId = () => {
    // This function is passed to FoodItem but we don't need to store the ID here
    // The FoodItem component will handle navigation internally
  };

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h1 className="categories-title">Dessert Recipes</h1>
        <p className="categories-subtitle">Sweet treats and delicious desserts</p>
      </div>
      
      {loading ? (
        <div className="categories-loading">Loading dessert recipes...</div>
      ) : recipes.length > 0 ? (
        <div className="food-container">
          {recipes.map((food) => (
            <FoodItem key={food.id} food={food} setFoodId={handleSetFoodId} />
          ))}
        </div>
      ) : (
        <div className="categories-loading">No dessert recipes found.</div>
      )}
    </div>
  );
};

export default Desserts; 