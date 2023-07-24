'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

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

    const [userData, setUserData] = useState();

    const getUserDetails = async () =>{
        try
        {
            const res = await axios.get('/api/userDetails');
            console.log(res.data); 
            setUserData(res.data.data);
            console.log(userData);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
      getUserDetails();
    }, [])
  return (
    <div>
      {/* const { email } = userData; */}
      Chatbot page
      <p> Username: { userData?.username } </p>
      <p> Email: { userData?.email } </p>
      <p> Phone: { userData?.phone } </p>
      <button onClick={handleLogOut} > Logout </button>

      <Link href='/'> Go to HomePage </Link>
    </div>
  )
}

export default page
