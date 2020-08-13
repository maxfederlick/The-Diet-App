// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { postFood } from '../services/foods'

// export default function CreateFood(props) {
//   const [foodName, setFoodName] = useState("")
//   const [foodQuantity, setFoodQuantity] = useState("")


//   const handleChange = (e) => {
//     e.preventDefault()
//     setFoodQuantity(e.target.value)
//   }

//   const handleChange1 = (e) => {
//     e.preventDefault()
//     setFoodName(e.target.value)
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newFood = await postFood(props.currentUser.id, foodName, foodQuantity);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Add food?</h3>
//       <label>Quantity
//     <select onChange={handleChange1}>
//           <option>One</option>
//           <option>Two</option>
//           <option>Three</option>
//           <option>Four</option>
//         </select>
//       </label>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={foodName}
//           onChange={handleChange}
//         />
//       </label>
//       <button>Submit</button>
//     </form>
//   )
// }