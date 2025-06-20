import React, { useEffect, useState } from 'react';
import './Search.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch"; 
const API_KEY = "7cb08b3c5ea34b4db7b32c971bafc6f1";

const Search = ({ setFoodData, setLoading }) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${URL}?query=${query}&addRecipeInformation=true&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error("Unauthorized or some other error");
        }
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results)
      } catch (error) {
        console.error("Error fetching food:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [query]);

  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-header">
          <h2>Find Your Perfect Recipe</h2>
          <p>Search through thousands of recipes from around the world</p>
        </div>
        <div className="search-box">
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search for recipes, ingredients, or cuisines..."
            className="search-input"
          />
        </div>
        <div className="search-tags">
          <span className="search-tag">Popular:</span>
          <button className="tag-btn" onClick={() => setQuery("pizza")}>Pizza</button>
          <button className="tag-btn" onClick={() => setQuery("pasta")}>Pasta</button>
          <button className="tag-btn" onClick={() => setQuery("salad")}>Salad</button>
          <button className="tag-btn" onClick={() => setQuery("dessert")}>Dessert</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
