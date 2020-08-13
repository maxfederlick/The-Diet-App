import React, {useEffect, useState} from 'react'
import { readAllRecipes } from '../services/recipes';

export default function UserProfile(props) {

  let [profile, setProfile] = useState([])

  const fetchData = async() => {
    
    const showRecipes = await readAllRecipes(props.currentUser.id);
    console.log(showRecipes)
    setProfile(showRecipes)
  }

  useEffect(() => {
    if (props.currentUser) {
      fetchData()
    } else {
      console.log('error')
    }
  }, [props.currentUser]); 


   
 

  return (
    <div>
{profile.map(recipe=> recipe.name)}
    </div>
  )
}
