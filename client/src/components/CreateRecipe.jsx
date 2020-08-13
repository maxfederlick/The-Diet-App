import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postRecipe } from '../services/recipes'

export default function CreateRecipe(props) {
  const [formData, setFormData] = useState({
    name: ""
  })

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = await postRecipe(props.currentUser.id, formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you want to name this recipe?</h3>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}