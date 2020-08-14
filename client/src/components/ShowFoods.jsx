import React, { useState, useEffect } from 'react';
import './ShowFoods.css'

export default function ShowFoods(props) {
  
  const allFoodInfo = props.foods.map(food => { return food })
  console.log(allFoodInfo[0])

  const allFoodInfo2 = props.foods1.map(food => { return food })
  
  
  console.log(allFoodInfo2)



  
  return (
     <div className={allFoodInfo.map(food=>food.label).length < 1  ? "display-none" : "showFoods-div"}>
      {allFoodInfo.map(food => <div className="showFoods-info">{food.label}:   {food.quantity}  {food.unit}</div>)}
    </div>
  );
}
