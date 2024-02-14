import React from 'react'
import RecommendedCard from './RecommendedCard'
import { recommended } from './RecommendedDb'

const Recommended = () => {
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
