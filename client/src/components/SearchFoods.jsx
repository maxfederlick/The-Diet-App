import React, { useState } from 'react'

export default function SearchFoods(props) {

  let [foodSearch, setFoodSearch] = useState("")
  let [quantity1, setQuantity1] = useState("")
  

  const handleChange = (e) => {
    e.preventDefault()
    setFoodSearch(e.target.value)
  }

  const handleChange1 = (e) => {
    e.preventDefault()
    setQuantity1(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setPassedFoods(foodSearch)
    props.setQuantity(quantity1)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label>Quantity
    <select onChange={handleChange1}>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>
      </select>
      </label>
    <label>
      Search:
      <input
        type="text"
        name="food"
        value={foodSearch}
        onChange={handleChange}
      />
    </label>
    <button>Submit</button>
      </form>
      
      </>
)
}