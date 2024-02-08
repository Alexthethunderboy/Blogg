'use client'

import React, { useState } from 'react'
import Vector1 from '@/assests/Vector1.png'
import Image from 'next/image'
import Vector2 from '@/assests/Vector2.png'
import Vector3 from '@/assests/Vector3.png'
import Vector4 from "@/assests/Vector4.png"
import '@/app/globals.css'
import { useRouter } from 'next/navigation'



export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tagImage, setTagImage] = useState("");
  const [readtime, setReadtime] = useState("");
  const [story, setStory] = useState("");


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value
    const tag = e.target[1].value
    const tagImage = e.target[2].value
    const readtime = e.target[3].value
    const story = e.target[4].value

    if (!title) {
      alert("Title is required.");
      return;
    }
    if (!tag) {
      alert("Tag is required.");
      return;
    }
    if (!tagImage) {
      alert("Tag Image is required.");
      return;
    }
    if (!readtime) {
      alert("Read time is required.");
      return;
    }
    if (!story) {
      alert("Story is required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/Published", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, tag, tagImage, readtime, story }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to publish");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='md:mx-[5rem]'>
      <div>
        <h1 className='font-bold text-3xl gap-4 p-5'>Create A New Blog</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <p className='ml-4 font-weight-500'>Title</p>
        <div className='p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2'>
        <Image  src={Vector1} alt="" className='w-5 h-5'/> 
        <input className='w-full focus:outline-none' type="text" placeholder='Enter title here' />
        </div>

        <p className='md:ml-4 ml-4 font-weight-700'>Tag</p>
        <div className='p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2'>
          <Image src={Vector2} alt='' className='w-5 h-5'/>
          <input className='w-full focus:outline-none' type="text" placeholder='Enter tags here' />
        </div>
        
        <p className='ml-4'>Tag</p>
        <div className='ps-2 mr-4 ml-4 flex justify-between items-center border border-slate-500 rounded gap-2'>
          <label htmlFor="file-upload" className='md:pe-[50rem] pe-0 cursor-pointer'>

          <Image src={Vector3} alt="" className='w-5 h-5'/>
          </label>
          <input className='w-full me-10 focus:outline-none' type="file" id='file-upload' accept='.jpg, .png, .jpeg' placeholder='Choose cover image from files'/>
          <button className='md:w-[300px] ms-10 bg-blue-400 text-white py-2 px-2 text-xs md:text-sm'>Upload cover image</button>
        </div>

        <p className='md:ml-4 ml-4'>Read time</p>
        <div className='w-[300px] p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2'>
          <Image src={Vector4} alt='' className='w-5 h-5'/>
          <input className='focus:outline-none' type="date" placeholder='Enter read time' />
        </div>

        <p className='md:ml-4 ml-4 text-black'>Story</p>
        <div className= ' p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2'>
          <textarea className='md:mb-[450px] focus:outline-none' type="text" placeholder='Write your story here' />
        </div>
      </form>
      <div className='flex justify-between p-2'>
        <button className='ml-2 md:py-3 md:px-[230px] px-11 py-3 rounded-md border text-white bg-blue-500'>Publish</button>
        <button className='mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50'>Save to drafts</button>
      </div>
    </div>
  )
}
