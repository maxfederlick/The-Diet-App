import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Main() {

  let [foods, setFoods] = useState('')

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios("https://api.edamam.com/api/nutrition-data?app_id=37000fbe&app_key=9c53c5c2040754304d57c7c52c20652f&ingr=1%20large%20apple");
      setFoods(data.data)
    }
    apiCall()
  }, [])
  console.log(foods)



  return (
    <>


    </>
  )
}

