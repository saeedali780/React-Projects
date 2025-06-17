import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import FoodItem from './components/FoodItem';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import RecipeViewDetails from './components/RecipeViewDetails';
import './App.css';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] = useState('656329')
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Search foodData={foodData} setFoodData={setFoodData} />
              <div className="food-container">
                {foodData.map((food) => (
                  <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
                ))}
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:id" element={<RecipeViewDetails foodId={foodId}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
