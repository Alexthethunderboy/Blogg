"use client"
import React from 'react'
import camera from '@/assets/camera.svg';
import reddelete from '@/assets/red delete.svg';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
// import Profile from '../profile/components/profile/page';
// import Logout from '../Logout/exit';
import { signOut } from 'next-auth/react';





export default function EditLogout() {
    const [showLogout, setshowLogout] = useState(false)
    const handleModal = () => {
        setshowLogout(!showLogout)
    }

    
    return (
        <div className="w-full h-auto bg-none text-black flex justify-center items-center absolute  top-[8rem] left-[35rem]">
            <div className="border border-solid rounded-xl flex flex-col bg-white w-[250px] h-[120px] px-[20px] py-[20px]" >

                <div className='flex items-center '>
                    <Image src={camera} alt="" />
                    <button className="w-[200px] h-[35px] border-solid bg-white text-black rounded-lg text-[18px] font-medium">
                        Edit Profile Picture
                    </button>
                </div>

                <div className='flex items-center '>

                    <Image src={reddelete} alt="" />
                  <div onClick={handleModal}>
                  
                        <button className="w-[130px] h-[35px] border-solid bg-white text-red-500 rounded-lg text-[18px] font-medium"
                        >
                            Log Out
                        </button>
                
                  </div>
                </div>
               
               {showLogout && (
                    <div className="w-full h-auto bg-none text-black flex justify-center items-center absolute  top-[8rem] right-[2rem] overflow-hidden">
                    <div className="border border-solid rounded-xl flex flex-col bg-white w-[417px] h-[350px] px-[54px] pt-[64px] pb-[13px]" >
                        <h1 className='text-[24px] flex font-semibold items-center justify-center mb-[5rem] '>Are you sure you want to log out?</h1>
                        <div className='flex gap-4'>
                            <button className="w-[142px] h-[49px] border border-solid border-black bg-white text-black rounded-lg text-[18px] font-medium"
                            onClick={() => {
                                signOut();
                              }}
                            >
        
                                YES
                            </button>
                            <button className="w-[137px] h-[49px] border border-white bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium"
                            >
                                NO
                            </button>
        
                        </div>
        
        
        
        
                    </div>
         
        
        
                </div>
               )}


            </div>


        </div>
    )

}