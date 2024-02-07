

"use client"

import React from "react";
import Image from "next/image";
import Imagepng from "../../../public/Image1.png";
import Imagepng2 from "../../../public/logos_facebook.png";
import Imagepng3 from "../../../public/mdi_apple.png";
import Imagepng4 from "../../../public/devicon_google.png";
import styles from "./SignIn.module.css";
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";


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

    if (!isValidEmail(username)) {
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
      
    <div className="bg-pink-200 flex ">
    <form className="onSubmit={handleSubmit}">
      <div className="flex m-auto mt-6 mb-4">
        <div className="ml-10">
          <Image
            className="h-[800px]"
            src={Imagepng}
            width="690"
            height="800"
            placeholder="blur"
            alt="Image"
          />
        </div>
        <div className="bg-gray-500 p-[6rem] h-[800px] ">
          <div className="mt-[2rem]">
            <h1 className="text-center font-extrabold text-3xl mb-3 border-1 text-blue-400 cursor-pointer">
              BLOGG
            </h1>

            <h6 className="text-center mb-6">welcome Back!</h6>
            <p className="text-sm text-center mb-10">
              Enter your user name or Email and Password to Login with us
            </p>
            <span className="flex flex-col">
              <label className="mb-3" htmlFor="">
                Username
              </label>
              <input
                className="h-[2.5rem] mb-[1.2rem] border-gray-300 rounded-full bg-slate-300 p-6 bg-none"
                type="text"
                placeholder="enter your username"
                id="username"
              />
            </span>
            <span className="flex flex-col">
              <label className="mb-3" htmlFor="">
                Password
              </label>
              <input
                className="h-[2.5rem] mb-4 rounded-full p-6 bg-slate-300 border-0"
                type="Password"
                placeholder="enter your Password"
                id="Password"
              />
            </span>

              <button className="bg-blue-300 w-full mt-6 h-14 text-2xl rounded-full p-3 shadow-lg cursor-pointer active:scale-0">
                Sign in
              
              </button>


            <div className="flex justify-between items-center mt-[3rem]">
              <hr className="w-[12rem]" />
              <span className="ml-[3rem] mr-[3rem]">OR</span>
              <hr className="w-[12rem]" />
            </div>
            <p className="text-center">sign in with</p>
            <div className=" {styles.container} flex flex-row h-8 w-8 justify-around m-auto gap-6 mt-8">
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
                className="cursor-pointer active:scale-0"
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