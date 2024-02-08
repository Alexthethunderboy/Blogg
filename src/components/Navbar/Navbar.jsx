"use client";
import Link from "next/link";
import React, { useState } from "react";
import ham from "@/assets/hamburger.png";
import Image from "next/image";
import styles from "@/components/Navbar/Navbar.module.css";

const Navbar = () => {
  const [show, setShow] = useState();
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
              <div className="flex flex-col items-center gap-5 my-10">
                <Link href={"/signUp"}>
                  <button className="w-[150px] h-[50px] border border-white bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium">
                    Get Started
                  </button>
                </Link>
                <Link href={"/signIn"}>
                  <button className="w-[150px] h-[50px] border-solid bg-white text-black rounded-lg text-[18px] font-medium">
                    Sign In
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
          <Link href={"/signUp"}>
            <button className="w-[150px] h-[50px] border-solid bg-[#26BDD2] text-white rounded-lg text-[18px] font-medium">
              Get Started
            </button>
          </Link>
          <Link href={"/signIn"}>
            <button className="w-[150px] h-[50px] border-solid bg-white rounded-lg text-[18px] font-medium">
              Sign In
            </button>
          </Link>
        </div>
        <div onClick={handleShow} className="md:hidden">
          <Image src={ham} width={50} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
