"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const login = () => {
  const router = useRouter();
  const[user, setUser] = useState({
    email:"",
    password:""
})

  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user, [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('/api/login', user)  
      // Set the status based on the response from the API route
      if (response.status === 200) 
      {
        console.log(response.data.message)
        setUser({
          email: "",
          password: ""
        })
        router.push('/chatbot')
      } 
      else 
      {
        console.log('error while sigin')
      }
    }
    catch (error) 
    {
      if (error.response) 
      {
        console.log(error.response.data.error);
      } 
      else 
      {
        console.log("An unexpected error occurred:", error);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Email: </label>
        <input type="text" name="email" value={user.email} onChange={handleInputs} />

        <label> Password </label>
        <input type="text" name="password" value={user.password} onChange={handleInputs} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default login