import React, { useEffect, useState } from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch"; 
const API_KEY = "a82fb4f46d3442cd80bc1fe258af652b";

const Search = ({foodData,setFoodData}) => {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error("Unauthorized or some other error");
        }
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results)
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    fetchFood();
  }, [query]);

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search food..."
      />
    </div>
  );
};

export default Search;
