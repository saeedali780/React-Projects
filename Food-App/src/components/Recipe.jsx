import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import './Recipe.css';

const API_KEY = '7cb08b3c5ea34b4db7b32c971bafc6f1';
const URL = 'https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=20';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`${URL}&apiKey=${API_KEY}`);
        const data = await res.json();
        setRecipes(data.results);
      } catch (err) {
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="recipe-section">
      <div className="recipe-header">
        <h1 className="recipe-title">All Recipes</h1>
     
      </div>
      {loading ? (
        <div className="recipe-loading">Loading recipes...</div>
      ) : (
        <div className="food-container">
          {recipes.map((food) => (
            <FoodItem key={food.id} food={food} setFoodId={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipe; 