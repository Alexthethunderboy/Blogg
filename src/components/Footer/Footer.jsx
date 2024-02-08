import React from 'react'
import copyright from '../../assets/copyright.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='md:w-full md:max-[1440px]:h-[100vh] h-auto bg-[#2B2A2A] text-white md:px-[5rem] md:pb-[2rem] md:pt-[3rem] px-5'>
      <div className='flex md:flex-row flex-col md:gap-[15rem] mb-[5rem]  '>
        <div className='md:mr-[10rem] '>
          <h1 className='text-[45px] text-[#26BDD2] font-extrabold mb-4'>BLOGG</h1>
          <p className='md:w-[371px] text-[14px] mb-6'>Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id. Commodo scelerisque urna donec volutpat imperdiet.</p>
          <div className='md:w-[379px] h-[54px] border border-solid border-[#26BDD2] rounded-full flex justify-between items-center pl-3 pr-2 text-[18px] font-medium'>
            <input type="email" name="" id="" placeholder='Email' className="bg-[#2B2A2A] md:w-19 w-20 border-[#2B2A2A] focus:outline-none"/>
            
            <button className="md:w-[129px] h-[40px] border-solid bg-[#26BDD2] rounded-full text-[18px] font-medium p-1">Subscribe</button>
          </div>
        </div>

        <div className='md:mr-[2rem] hidden md:block'>
          <h1 className='mb-4 text-[18px] font-medium'>Quick links</h1>
          <h2 className='mb-2 text-[18px] font-normal'>Home</h2>
          <h2 className='mb-2 text-[18px] font-normal'>Blog</h2>
          <h2 className='mb-2 text-[18px] font-normal'>About</h2>
          <h2 className='mb-2 text-[18px] font-normal'>Contact</h2>
        </div>

        <div className='text-[18px] font-medium ms-2 mt-5 md:mt-0 md:ms-0 '>
          <h1 className='mb-4 text-[18px] font-medium md:block hidden'>Quick links</h1>
          <h2 className='mb-2 text-[18px] font-normal'>Home</h2>
          <h2 className='mb-2 text-[18px] font-normal'>Blog</h2>
          <h2 className='mb-2 text-[18px] font-normal'>About</h2>
          <h2 className='mb-2 text-[18px] font-normal'>Contact</h2>
        </div>

      </div>
      <hr className='mb-[1rem] border-[1px] border-solid border-[#26BDD2]' />
      <div className='flex gap-2 items-center justify-center text-xs md:text-sm'>
        <Image src={copyright} alt="copyright" />
        <h1 className='md:text-[14px] font-normal'>2023 BLOGG</h1>
        <h1 className='md:text-[14px] font-normal'>All rights reserved</h1>
        <a href="" className='md:text-[14px] font-normal'>Privacy Policy</a>
        <h1 className='md:text-[14px] font-normal'>Terms of Service</h1>
      </div>

    </div>
  )
}

export default Footer