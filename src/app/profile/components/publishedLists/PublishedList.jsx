"use client";
import Image from "next/image";
import React, { useState } from "react";
import dots from '@/assets/dots.png'
import send from "@/assets/send.png";
import edit from "@/assets/edit.png";
import del from "@/assets/delete.png"

export default function PublishedList({ img, views, beauty, title }) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }
  return (
    <div className=" w-full flex flex-col mx-auto md:flex-row gap-x-5 justify-center md:pt-0 relative mb-8 ">
      <div>
        <Image className="md:w-[451px] w-full md:h-[250px] object-cover self-center" src={img} alt="image" width={300} height={300}/>
      </div>

      <div className="ml-0 ">
        <div className="flex items-center gap-5 pt-[55px] mb-4 text-[#626060] relative">
        <button className="bg-[#26BDD2] text-white px-2 rounded-md py-1 mr-3 md:mr-0">
          {beauty}
        </button>
        <Image src={views} alt="views" width={60} height={60} />
        {/* <span className="text-[#26BDD2] text-4md rounded-[50%] mb-5 absolute top-10 left-[26%]">.</span> */}
          <span className="flex items-center gap-x-2"> <span className="bg-[#26BDD2] block rounded-md  w-[5px] h-[5px] "></span>4 mins read</span>
          <span>09/09/2023</span>
        </div>
        <div>
          <h1 className="font-bold text-[20px] mb-3">{title}</h1>
          <p className="md:w-[700px] text-[#626060] text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            dolores nihil suscipit ullam amet voluptatibus laboriosam est hic
            beatae obcaecati perferendis earum explicabo dolorem, maxime, quidem
            officiis sequi modi aspernatur maiores fugit rerum eos nulla
            temporibus. Quam exercitationem amet, repellat doloribus inventore
            quod delectus non suscipit, doloremque, rem excepturi dolor. Lorem
            ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <Image
        onClick={handleClick}
        className="cursor-pointer w-6 h-6 absolute md:static md:mb-[80px] right-0 bottom-[27.6%]"
        src={dots} alt="dots"
        width={200} height={200}
      />
       {show && (
        <div className="bg-[#26BDD2] inline-flex flex-col w-[90px] h-[85px] rounded-md text-white pt-3 ml-5 mb-4 p-[10px] absolute right-5">
          <div className="flex gap-2 mb-2">
            <Image className="w-[12px] h-[12px] cursor-pointer" src={send} alt="send" width={200} height={200}/>
            <span className="text-[10px]">Published</span>
          </div>

          <div className="flex gap-2 mb-2">
            <Image className="w-[12px] h-[12px] cursor-pointer" src={edit} alt="edit" width={200} height={200} />
            <span className="text-[10px]">Edit</span>
          </div>

          <div className="flex gap-2">
            <Image className="w-[12px] h-[12px] cursor-pointer" src={del} alt="del" width={200} height={200}/>
            <span className="text-[10px]">Delete</span>
          </div>
        </div>
      )}
    </div>
  );
}
