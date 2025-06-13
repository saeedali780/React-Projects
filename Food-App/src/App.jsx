import React, { useState } from 'react';
import Search from './components/Search';
import Foodlist from './components/Foodlist';

const App = () => {
  const [foodData,setFoodData] = useState([]);
  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Foodlist foodData={foodData}/>
    </div>
  )
}

export default App
