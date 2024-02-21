"use client"
import React from 'react'
import camera from '@/assets/camera.svg';
import reddelete from '@/assets/red delete.svg';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
// import Profile from '../profile/components/profile/page';
import Logout from '../Logout/exit';




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
               
               {showLogout && <Logout/>}


            </div>


        </div>
    )

}