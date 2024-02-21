"use client";
import Image from "next/image";
import React, { useState } from "react";
import dots from '@/assets/dots.png'
import send from "@/assets/send.png";
import edit from "@/assets/edit.png";
import del from "@/assets/delete.png"
import eye from '@/assets/eye.png'
import RemoveBtn from "../buttons/RemoveBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PublishedList({ img, views, beauty, title, href, removeId }) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }

    // const router = useRouter();

  return (
    <div className=" w-[100%] mx-auto flex flex-col md:flex-row gap-x-5 justify-center md:pt-0 relative mb-8 ">
      <div className="w-[32%]">
        <Image className="md:w-[100%] w-[90%] md:h-[250px] object-cover self-start" src={img} alt="image" width="500" height="400"/>
      </div>

      <div className="w-[68%] ">
        <div className="flex items-center gap-5 pt-[55px] mb-4 text-[#626060] relative">
        <button className="bg-[#26BDD2] text-white px-2 rounded-md py-1 mr-3 md:mr-0">
          {beauty}
        </button>
        <Image src={eye} alt="views" width={20} height={20} />
        {/* <span className="text-[#26BDD2] text-4md rounded-[50%] mb-5 absolute top-10 left-[26%]">.</span> */}
          <span className="flex items-center gap-x-2"> <span className="bg-[#26BDD2] block rounded-md  w-[5px] h-[5px] "></span>4 mins read</span>
          <span>09/09/2023</span>
        </div>
        <div>
          <h1 className="font-bold text-[20px] mb-3">{title}</h1>
          <p className="md:w-[auto] text-[#626060] text-[14px]">
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
        <div className="bg-gray-50 inline-flex flex-col w-[90px] h-[85px] rounded-md text-black pt-3 ml-5 mb-4 p-[10px] absolute right-5">
          <div className="flex gap-2 mb-2">
            <Image className="w-[12px] h-[12px] cursor-not-allowed" src={send} alt="send" width={200} height={200}/>
            <Link href="#" className="text-[10px] cursor-not-allowed">Published</Link>
          </div>

          <div className="flex gap-2 mb-2">
            <Link href={href}>
              <Image className="w-[12px] h-[12px] cursor-pointer" src={edit} alt="edit" width={200} height={200} />
            </Link>
            <Link className="text-[10px]" href={href}>
              Edit
            </Link>
          </div>

          <div>
            <RemoveBtn id={removeId}/>
          </div>
        </div>
      )}
    </div>
  );
}