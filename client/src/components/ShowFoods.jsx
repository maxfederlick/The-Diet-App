import React, { useState, useEffect } from 'react';
import './ShowFoods.css'

export default function ShowFoods(props) {
  
  const newStuff = props.foods
  
  return (

    <div className={newStuff.map(food=>food.label).length < 1  ? "display-none" : "showFoods-div"}>
      {newStuff.map(food =><div className="showFoods-info">{food.label}:   {food.quantity}  {food.unit}</div>)}
    </div>
  )
}
