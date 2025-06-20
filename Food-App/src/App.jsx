import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import FoodItem from './components/FoodItem';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';
import RecipeViewDetails from './components/RecipeViewDetails';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Recipe from './components/Recipe';
import Categories from './components/Categories';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import './App.css';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState('656329');
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/recipe/:id" element={<RecipeViewDetails foodId={foodId}/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
