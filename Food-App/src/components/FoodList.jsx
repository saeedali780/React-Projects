import React from 'react'

const Foodlist = ({foodData}) => {
  return (
    <div> {foodData.map((food)=><h1>{food.title}</h1>)}</div>
  )
}

export default Foodlist