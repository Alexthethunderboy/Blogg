"use client"

import React from 'react'
import RecommendedCard from './RecommendedCard'
import { recommended } from './RecommendedDb'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Recommended = () => {
  
  const { data: session, status } = useSession()
  const router = useRouter()
  if (status === 'loading') {
    return <p>Loading...</p>
}

if (status === 'unauthenticated') { 
     return null
}
  return (
    <div className='xl:py-[5rem] py-[2rem]'>
        <h1 className='text-[34px] xl:pb-3'>Recommended</h1>
        <div className=''>
            <div className='xl:flex gap-10'>
                {recommended.map((recommended) =>(
                    <RecommendedCard
                    key= {recommended.id}
                    image = {recommended.image}
                    text = {recommended.text}
                    paragraph = {recommended.paragraph}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Recommended