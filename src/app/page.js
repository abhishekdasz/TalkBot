"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  const handleLogOut = async () =>{
    try 
    {
      await axios.get('/api/logout');
      router.push('/login')
    }
    catch(error)
    {
      console.log(error);
    }
  }
  return (
    <div>
      Home Page
      <button onClick={handleLogOut} > Logout </button>
    </div>
  )
}

export default page