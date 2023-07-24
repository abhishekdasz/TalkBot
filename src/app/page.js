"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Home Page
      <Link href='/chatbot'> ChatBot </Link>
    </div>
  )
}

export default page