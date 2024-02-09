

"use client"

import React from "react";
import Image from "next/image";
import Imagepng from "../../../public/Image1.png";
import Imagepng2 from "../../../public/logos_facebook.png";
import Imagepng3 from "../../../public/mdi_apple.png";
import Imagepng4 from "../../../public/devicon_google.png";
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";
import styles from "./SignIn.module.css"



const Sign_in = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidUsername(username)) {
      setError("username is invalid");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password is invalid");
      return;
    }
    console.log(username, password);

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    const newRes = res.error;
    console.log(newRes);
    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }





  return (
    status !== "authenticated" && (
      
    <div className=" {styles.container} flex bg-slate-400">
    <form className="onSubmit={handleSubmit}">
      <div className=" xl:flex m-auto mt-6 mb-4 md:m-auto  ">
        <div className="xl:ml-0">
          <Image
            className=" xl:h-[900px] xl:ml-0 xl:block xl:w-[62rem] h-[18rem] w-[23rem] ml-3  
            md:w-[740px] md:h-[22rem] md:pr-6 md:mt-[2rem] xl:pr-0 xl:mt-0 xl:mb-0"
            src={Imagepng}
            // width="690"
            // height="800"
            placeholder="blur"
            alt="Image"
          />
        </div>
        <div className= " xl:p-[8rem] h-[800px] xl:w-[750px] xl:mt-[2rem] ml-2 xl:ml-0">
          <div className=" xl:mt-[-1rem] mt-[3rem] pt-4">
            <h1 className=" xl:text-center xl:ml-0 font-extrabold text-3xl mb-3 border-1
             text-blue-400 cursor-pointer ml-[8rem] pt-6 md:text-center md:ml-[4rem] md:pt-5">
              BLOGG
            </h1>

            <h6 className="xl:text-center xl:ml-0 mb-6 ml-[7.8rem] md:text-center md:ml-[4rem]">welcome Back! 🙂 </h6>
            <p className="xl:text-[12px] xl:text-center xl:ml-0 mb-10 text-[10px] 
            w-[220px] text-center xl:w-full ml-[4.8rem] md:text-center md:w-[300px] md:ml-[16.8rem]">
              Enter your user name or Email and Password to Login with us 😇 
            </p>
            <span className="flex flex-col md:ml-[11rem] xl:ml-0">
              <label className=" xl:mb-3 mb-4 ml-8" htmlFor="">
                <span className="">Username</span>
              </label>
              <input
                className="xl:h-[2.5rem] xl:mb-[1.2rem] xl: border-gray-300 xl:rounded-full 
                xl: bg-slate-300 xl:p-6 xl:w-full bg-none ml-7 h-[3rem] p-3 rounded-full w-[328px] md:w-[400px] "
                type="text"
                placeholder="enter your username" 
                required
                
              />
            </span>
            <span className="flex flex-col md:ml-[11rem] xl:w-full xl:ml-[-.4rem]">
              <label className="xl:mb-3 mb-4 ml-8" htmlFor="">
                Password
              </label>
              <input
                className=":h-[2.5rem] xl:mb-[1.2rem] xl: border-gray-300 xl:rounded-full 
                xl: bg-slate-300 xl:p-6 xl:w-full bg-none ml-7 h-[3rem] p-3 rounded-full w-[328px] md:w-[400px]"
                type="Password"
                placeholder="enter your Password" 
                required
                
              />
            </span>

              <button className="xl:bg-blue-300 xl:w-full xl:mt-6 xl:h-14 
              xl:text-2xl xl:rounded-full xl:p-3 xl:shadow-lg xl:cursor-pointer 
              xl:active:scale-0 ml-[2rem] mt-[5rem] text-lg rounded-full w-[328px]
               bg-blue-400 h-[3.8rem] md:ml-[12.8rem] md:w-[400px] xl:ml-[2rem]">
               <span className="xl:ml-[-1rem]"> Sign in</span>
              
              </button>


            <div className="flex justify-between items-center mt-[3rem]">
              <hr className="xl:w-[12rem] w-[8rem]" />
              <span className="xl:ml-[4rem] mr-[2rem]">OR</span>
              <hr className="xl:w-[12rem] w-[8rem]" />
            </div>
            <p className="text-center xl:ml-[3rem]">sign in with</p>
            <div className=" xl:ml-[15.8rem] flex flex-row h-8 w-8 justify-around m-auto gap-6 mt-8">
              <Image
                className="cursor-pointer active:scale-0"
                src={Imagepng2}
                width="18px"
                height="18px"
                alt="facebooklogo"
              />
              <Image
                className="cursor-pointer active:scale-0"
                src={Imagepng3}
                width="24px"
                height="22px"
                alt="applelogo"
              />
              <Image
                className=" {styles.google}  cursor-pointer active:scale-0"
                src={Imagepng4}
                width="24px"
                height="22px"
                alt="googlelogo"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
    </form>
  </div>
    )
  );
}

export default Sign_in;