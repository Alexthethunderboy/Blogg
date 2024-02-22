"use client";
import Link from "next/link";
import React, { useState } from "react";
import camera from '@/assets/camera.svg';
import reddelete from '@/assets/red delete.svg';
import ham from "@/assets/hamburger.png";
import vec from "@/assets/Vector 9.png";
import Image from "next/image";
import styles from "@/components/Navbar/Navbar.module.css";
import ellipse from "@/assets/ellipse.png";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';

// import EditLogout from "../../app/profileModal/ViewModal";


const Navbar = () => {
  const [show, setShow] = useState();
  const [OpenPro, setOpenPro] = useState(false);
  const [OpenExit, setOpenExit] = useState(false);
  const { data: session } = useSession();
  const [showLogout, setshowLogout] = useState(false)
  const handleModal = () => {
      setshowLogout(!showLogout)
  }
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <nav className=" h-auto bg-white flex justify-between items-center md:mx-[5rem] md:my-[2rem] mx-5 my-2 ">
        <Link href={"/"}>
          <h1 className="text-[45px] text-[#26BDD2] font-extrabold ">BLOGG</h1>
        </Link>

        <div className={styles.nav}>
          {show && (
            <div className={styles.list}>
              <ul className="">
                <li className="text-2xl font-medium my-5">
                  <Link href={"/"}>Home</Link>
                </li>

                <li className="text-2xl font-medium mb-5">
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="text-2xl font-medium mb-5">About</li>
                <li className="text-2xl font-medium mb-5">Contact</li>
              </ul>
              <div className="flex flex-col items-center my-10">
                <Link href={"/signUp"}>
                  <button className="w-[150px] h-[50px] border border-white bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium">
                    Get Started
                  </button>
                </Link>
                <Link href={"/signIn"} className="flex items-center">
                 <button className="w-[150px] h-[50px] border-solid bg-white text-black rounded-lg text-[18px] font-medium">
                  Signin
                 </button>
                </Link> 
              </div>
            </div>
          )}
        </div>

        <div className="xl:block hidden">
          <ul className="flex flex-col md:flex-row gap-[5rem]">
            <li className="text-[18px] font-medium ">
              <Link href={"/"}>Home</Link>
            </li>

            <li className="text-[18px] font-medium ">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="text-[18px] font-medium ">About</li>
            <li className="text-[18px] font-medium ">Contact</li>
          </ul>
        </div>

        <div className="md:flex items-center gap-3 hidden">
          {!session ? (
            <>
            <div className="flex items-center gap-2">
              <Link href={"/signUp"}>
                <button className="w-[150px] h-[50px] border-solid bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium">
                  Get Started
                </button>
              </Link>
              <Link href="/signIn">
                <button className="w-[150px] h-[50px] border-solid bg-white rounded-lg text-[18px] font-medium">
                  SignIn
                </button>
              </Link>
              </div>
            </>
          ) : (
            <>
              {/* {session.user?.email} */}
              <div className="flex items-center gap-1">
                {/* <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button> */}
                <Link href={"/profile"}>
                  <Image src={ellipse} alt="" className="border-[2px] border-[#26BDD2] border-solid rounded-full w-[46px] h-[46px]"/>
                </Link>
                <Image className="cursor-pointer" 
                 onClick={() => setOpenPro((prev) => !prev)}
                src={vec} alt="" />
              </div>
            </>
          )}
          {/* <Link href={"/signUp"}>
            <button className="w-[150px] h-[50px] border-solid bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium">
              Get Started
            </button>
          </Link>
          <Link href={"/signIn"}>
            <button className="w-[150px] h-[50px] border-solid bg-white rounded-lg text-[18px] font-medium">
              Sign In
            </button>
          </Link> */}
        </div>
        <div onClick={handleShow} className="md:hidden">
          <Image src={ham} width={50} alt=""/>
        </div>
      </nav>

      {OpenPro && (
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
  
    </div>
  );
};

export default Navbar;
