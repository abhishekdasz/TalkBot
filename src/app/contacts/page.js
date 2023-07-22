"use client"
import React, { useState } from 'react'
import axios from 'axios';

const contacts = () => {
  const[user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
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
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
        } else {
        }

    }catch (e) {
        console.log(e)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input type="text" name="username" value={user.username} onChange={handleInputs} />

        <label> Email: </label>
        <input type="text" name="email" value={user.email} onChange={handleInputs} />

        <label> Phone </label>
        <input type="phone" name="phone" value={user.phone} onChange={handleInputs} />

        <label> Message </label>
        <input type="text" name="message" value={user.message} onChange={handleInputs} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default contacts