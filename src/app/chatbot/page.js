'use client'
import React, { useState } from 'react'
import axios from 'axios';

const page = () => {
    const [data, setData] = useState();

    const getUserDetails = async () =>{
        try
        {
            const res = await axios.get('/api/me');
            console.log(res.data); 
        }
        catch(error)
        {
            console.log(error);
        }
    }
  return (
    <div>
      Chatbot page
      <button onClick={getUserDetails}> Get Details </button>
    </div>
  )
}

export default page
