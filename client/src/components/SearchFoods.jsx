import React, { useState } from 'react'

export default function SearchFoods(props) {

  let [foodSearch, setFoodSearch] = useState("")
  let [quantity1, setQuantity1] = useState("")

  // let [foodSearch2, setFoodSearch2] = useState("")
  // let [quantity2, setQuantity2] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setPassedFoods(foodSearch)
    props.setQuantity(quantity1)
  }
  
  const handleChange1 = (e) => {
    e.preventDefault()
    setQuantity1(e.target.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFoodSearch(e.target.value)
  }

// // submit for second form
//   const handleSubmit1 = (e) => {
//     e.preventDefault()
//     props.setPassedFoods1(foodSearch)
//     props.setQuantity1(quantity2)
//   }
  
// // quantity for second form
//   const handleChange2 = (e) => {
//     e.preventDefault()
//     setQuantity2(e.target.value)
//   }

//   const handleChange3 = (e) => {
//     e.preventDefault()
//     setFoodSearch2(e.target.value)
//   }


  
  return (
    <>
       <h3 className = "search-text" >Search For Your Food</h3>
      <form className="search-form" onSubmit={handleSubmit}>
      <label>Quantity
    <select onChange={handleChange1}>
        <option>Select a quantity</option>
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

      {/* {props.passedFoods && (
        <form onSubmit={handleSubmit1}>
          <label>Quantity
    <select onChange={handleChange2}>
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
              value={foodSearch2}
              onChange={handleChange3}
            />
          </label>
          <button>Submit</button>
        </form>
      )} */}
      </>
)
}