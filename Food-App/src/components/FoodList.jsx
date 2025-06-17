import React from 'react'
import FoodItem from './FoodItem'

const Foodlist = ({foodData}) => {
  return (
    <div> {foodData.map((food,key)=>(
   <FoodItem key={key} food={food}/>
    ))}
    </div>
  )
}

export default Foodlist