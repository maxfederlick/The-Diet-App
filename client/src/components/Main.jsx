import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import SearchFoods from './SearchFoods';
import ShowFoods from './ShowFoods'
import Register from './Register'
import Login from './Login';
import CreateRecipe from './CreateRecipe';
import UserProfile from './UserProfile'

export default function Main(props) {

  const { setCurrentUser } = props;

  let [passedFoods, setPassedFoods] = useState("");
  let [foods, setFoods] = useState([]);
  let [quantity, setQuantity] = useState("")



  useEffect(() => {
    const apiCall = async () => {
      const data = await axios(`https://api.edamam.com/api/nutrition-data?app_id=37000fbe&app_key=9c53c5c2040754304d57c7c52c20652f&ingr=${quantity}%20${passedFoods}`);
      setFoods(Object.values(data.data.totalNutrients))
    }
    apiCall()
  }, [passedFoods], [quantity])

  console.log(foods)
  console.log(passedFoods)

  return (
    <main>
      <Route path='/login' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />

      <Route path='/register' render={(props) => (
        <Register
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />
      <Route exact path='/'>
        <SearchFoods passedFoods={passedFoods} setPassedFoods={setPassedFoods} quantity={quantity} setQuantity={setQuantity} />
        <ShowFoods foods={foods} />
        <CreateRecipe currentUser={props.currentUser} />
      </Route>
      <Route path='/userprofile'>
        <UserProfile currentUser={props.currentUser} />
      </Route>
    </main>
  )
}

