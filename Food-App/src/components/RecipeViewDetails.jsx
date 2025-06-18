import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeViewDetails.css';

const RecipeViewDetails = ({foodId}) => {
  const [food,setFood] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "7cb08b3c5ea34b4db7b32c971bafc6f1";

  useEffect(()=>{
    async function fetchFood(){
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json()
      console.log(data);
      setFood(data);
      setIsLoading(false)
    }
    fetchFood()
  },[foodId])
  const { id } = useParams();

  return (
    <div className="recipe-details-container">
      <div className="recipe-header">
        <div className="recipe-image-container">
          <img 
            src={food.image}
            alt="Recipe" 
            className="recipe-main-image"
          />
          <div className="recipe-badge">Popular</div>
        </div>
        <div className="recipe-title-section">
          <h1>{food.title}</h1>
          <div className="price-container">
            <h3 className="recipe-price">
              <span className="price-label">Price:</span>
              <span className="price-value">${food.pricePerServing ? (food.pricePerServing / 100).toFixed(2) : 'N/A'}</span>
              <span className="price-unit">per serving</span>
            </h3>
            {food.pricePerServing && (
              <p className="total-price">
                Total: ${((food.pricePerServing * food.servings) / 100).toFixed(2)}
              </p>
            )}
          </div>
          <div className="recipe-meta">
            <span className="cooking-time">
              <span className="meta-icon">⏱️</span> {food.readyInMinutes} mins
            </span>
            <span className="difficulty">
              <span className="meta-icon">⭐</span> Easy
            </span>
            <span className="servings">
              <span className="meta-icon">👥</span> {food.servings}
            </span>
          </div>
          <div className="recipe-tags">
           
            <span className="tag">{food.vegetarian ? '🥕 Vegetarian': '🥩 Non Vegetarian  '}</span>
            <span className="tag">{food.vegan ? '🐄 Vegan':''}</span>
            
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-description">
          <h2>Description</h2>
          <p>A refreshing and nutritious salad that combines fresh vegetables with a light dressing. Perfect for a healthy lunch or dinner option.</p>
        </div>

        <div className="recipe-details-grid">
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {isLoading ? (
                <p>Loading ingredients...</p>
              ) : (
                food.extendedIngredients?.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} {ingredient.unit} {ingredient.originalName}
                  </li>
                ))
              )}
            </ul>
          </div>

          <div className="recipe-instructions">
           
            <h2>Instructions</h2>
            {isLoading ? (<p>loading...</p>)
             :(  <ol>
              
              {food.analyzedInstructions[0].steps.map((step)=> (<li>{step.step}</li>))}
              </ol>
              )} 
           
          </div>
        </div>

        <div className="recipe-nutrition">
          <h2>Nutrition Information</h2>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-label">Calories</span>
              <span className="nutrition-value">250</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Protein</span>
              <span className="nutrition-value">8g</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Carbs</span>
              <span className="nutrition-value">15g</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">Fat</span>
              <span className="nutrition-value">18g</span>
            </div>
          </div>
        </div>

        <div className="recipe-actions">
          <button className="save-recipe-btn">
            <span className="btn-icon">❤️</span> Save Recipe
          </button>
          <button className="share-recipe-btn">
            <span className="btn-icon">📤</span> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeViewDetails; 