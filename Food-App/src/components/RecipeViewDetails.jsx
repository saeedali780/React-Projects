import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeViewDetails.css';

const RecipeViewDetails = ({foodId}) => {
  
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "7cb08b3c5ea34b4db7b32c971bafc6f1";

  useEffect(()=>{
    async function fetchFood(){
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json()
      console.log(data);
      
    }
    fetchFood()
  },[])
  const { id } = useParams();

  return (
    <div className="recipe-details-container">
      <div className="recipe-header">
        <div className="recipe-image-container">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
            alt="Recipe" 
            className="recipe-main-image"
          />
          <div className="recipe-badge">Popular</div>
        </div>
        <div className="recipe-title-section">
          <h1>Delicious Healthy Salad</h1>
          <div className="recipe-meta">
            <span className="cooking-time">
              <span className="meta-icon">⏱️</span> 30 mins
            </span>
            <span className="difficulty">
              <span className="meta-icon">⭐</span> Easy
            </span>
            <span className="servings">
              <span className="meta-icon">👥</span> 4 servings
            </span>
          </div>
          <div className="recipe-tags">
            <span className="tag">Healthy</span>
            <span className="tag">Vegetarian</span>
            <span className="tag">Quick</span>
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
              <li>2 cups mixed salad greens</li>
              <li>1 cucumber, sliced</li>
              <li>1 bell pepper, diced</li>
              <li>1 cup cherry tomatoes</li>
              <li>1/4 red onion, thinly sliced</li>
              <li>1/4 cup feta cheese</li>
              <li>2 tablespoons olive oil</li>
              <li>1 tablespoon balsamic vinegar</li>
              <li>Salt and pepper to taste</li>
            </ul>
          </div>

          <div className="recipe-instructions">
            <h2>Instructions</h2>
            <ol>
              <li>Wash and prepare all vegetables</li>
              <li>Combine salad greens, cucumber, bell pepper, tomatoes, and red onion in a large bowl</li>
              <li>Whisk together olive oil and balsamic vinegar</li>
              <li>Drizzle dressing over salad and toss gently</li>
              <li>Sprinkle with feta cheese</li>
              <li>Season with salt and pepper to taste</li>
            </ol>
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