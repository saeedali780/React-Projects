import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = ({food, setFoodId}) => {
  console.log(food);
  
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    console.log(food.id);
    
    setFoodId(food.id)
    navigate(`/recipe/${food.title}`);
  };

  return (
    <div className="food-card">
      <div className="food-image-container">
        <img 
          src={food.image} 
          alt={food.title} 
          className="food-image"
        />
        <div className="food-badge">Popular</div>
      </div>
      
      <div className="food-content">
        <h2 className="food-title">{food.title}</h2>
        <div className="food-price-time">
          <span className="food-price">
            <span role="img" aria-label="Price">💲</span> {food.pricePerServing ? `$${(food.pricePerServing/100).toFixed(2)}` : 'N/A'}
          </span>
          <span className="food-time">
            <span role="img" aria-label="Time">⏱️</span> {food.readyInMinutes ? `${food.readyInMinutes} min` : 'N/A'}
          </span>
        </div>
        
        <div className="food-meta">
          <div className="meta-item">
            <span className="meta-icon">⭐</span>
            <span>4.8</span>
          </div>
        </div>

        <button className="view-recipe-btn" onClick={handleViewRecipe}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;