import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postFood } from '../services/foods'

export default function CreateFood(props) {
  
  const [foodData, setFoodData] = useState({
    name: "",
    quantity: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = await postFood(props.currentUser.id, props.createdRecipe.id, foodData);
    console.log(newFood)
    console.log(props.currentUser.id)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>Add food?</h3>
      <label>Quantity
    <select name="quantity" value={foodData.quantity} onChange={handleChange}>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
        </select>
      </label>
      <label>
        Name:
        <input
            name="name"
            type="text"
            value={foodData.name}
            onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
      </>
  )
}