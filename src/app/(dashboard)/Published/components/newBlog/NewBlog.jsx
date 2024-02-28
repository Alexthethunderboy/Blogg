"use client";

import React, { useEffect, useRef, useState } from "react";
import Vector1 from "@/assets/Vector1.png";
import Image from "next/image";
import Vector2 from "@/assets/Vector2.png";
import Vector3 from "@/assets/Vector3.png";
import Vector4 from "@/assets/Vector4.png";
// import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function NewBlog() {
  const CLOUD_NAME = 'dnd3am4dm'
  const UPLOAD_PRESET = 'blog-project123'
  const router = useRouter();

  const [errors, setErrors] = useState({})
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [photo, setPhoto] = useState('');
  const [readtime, setReadtime] = useState('');
  const [story, setStory] = useState('');

  const [errors, setErrors] = useState({})
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [photo, setPhoto] = useState('');
  const [readtime, setReadtime] = useState('');
  const [story, setStory] = useState('');

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>

  }

  if (status === 'unauthenticated') {
  if (status === 'unauthenticated') {
    router.push("/");
    return null
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const buttonType = window.event.submitter.name

    let newErrors = {};

    // Check for errors
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }else if (title.trim().length < 5){
      newErrors.title = "Title cannot be less than 5";
    }

    if (!tag.trim()) {
      newErrors.tag = "Tag is required";
    }else if (tag.trim().length < 5 ){
      newErrors.tag = "Tag cannot be less than 5";
    }else if (tag.trim().length > 20 ){
      newErrors.tag = "Tag cannot be more than 20";
    }


    if (!photo) {
      newErrors.photo = "Photo is required";
    }

    // if (!readtime.trim()) {
    //   newErrors.readtime = "Readtime is required";
    // }else if (readtime.trim().length < 5){
    //   newErrors.readtime = "Readtime cannot be less than 5";
    // }else if (readtime.trim().length > 20){
    //   newErrors.readtime = "Readtime cannot be more than 20";
    // }

    if (!story.trim()) {
      newErrors.story = "Story is required";
    }else if (story.trim().length < 25) {
      newErrors.story = "Story cannot be less than 25";
    }else if (story.trim().length > 150) {
      newErrors.story = "Story cannot be more than 150";
    }

    // If there are errors, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});


  const readtime = new Date()
  console.log(readtime);

    const photo2 = photo[0]
    console.log(photo2);

    if (buttonType === "publish") {
    if (buttonType === "publish") {
      //HANDLE Publish FUNCTION
      try {
        const tagImage = await uploadImage(photo2)


        const res = await fetch("http://localhost:3000/api/published", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ title, tag, tagImage, readtime, story }),
        });


        if (res.status === 201) {
          toast("successfully Published")
          return router.replace("/profile");
          return router.replace("/profile");
        } else {
          throw new Error("Failed to publish");
        }
        if (res.status === 500) {
          alert(`There's a problem`);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    }

    if (buttonType === "draft") {
      //HANDLE DRAFT FUNC
      try {
    }

    if (buttonType === "draft") {
      //HANDLE DRAFT FUNC
      try {
        const tagImage = await uploadImage(photo2)


        const res = await fetch("http://localhost:3000/api/draft", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ title, tag, tagImage, readtime, story }),
        });


        if (res.status === 201) {
          toast("successfully Published")
          return router.replace("/profile");
          toast("successfully Published")
          return router.replace("/profile");
        } else {
          throw new Error("Failed to publish");
        }
        if (res.status === 500) {
          alert(`There's a problem`);
        }
      } catch (error) {
        console.log(error);
      }
      return;
    }
    }

  };
  };

  const uploadImage = async (photo) => {
    if (!photo) return
    console.log(photo);

    const formData = new FormData()

    formData.append("file", photo)
    formData.append("upload_preset", UPLOAD_PRESET)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      })

      const data = await res.json()
      console.log(data);

      const tagImage = data.secure_url
      console.log(tagImage);

      return tagImage
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[90%] mx-auto mb-14 py-[20rem">
      <div>
        <h1 className="font-bold text-3xl gap-4 p-5">Create A New Blog</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="ml-4 font-weight-500">Title</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector1} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter title here"
            name="text"
            onChange={(e) => setTitle(e.target.value)}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {errors.title && <p className="text-red-500 ml-4">{errors.title}</p>}
        {errors.title && <p className="text-red-500 ml-4">{errors.title}</p>}

        <p className="md:ml-4 ml-4 font-weight-700">Tag</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector2} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter tags here"
            name="tag"
            onChange={(e) => setTag(e.target.value)}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        {errors.tag && <p className="text-red-500 ml-4">{errors.tag}</p>}
        {errors.tag && <p className="text-red-500 ml-4">{errors.tag}</p>}

        <p className="ml-4">Tag</p>
        <div className="ps-2 mr-4 ml-4 flex justify-between items-center border border-slate-500 rounded gap-2">
          <label
            htmlFor="file-upload"
            className="md:pe-[50rem] pe-0 cursor-pointer"
            placeholder="Choose cover image from files"
          >
            <Image src={Vector3} alt="" className="w-5 h-5" />
          </label>
          <input
            className="w-full me-10 focus:outline-none"
            type="file"
            id="file-upload"
            accept=".jpg, .png, .jpeg"
            placeholder="Choose cover image from files"
            onChange={(e) => setPhoto(e.target.files)}
            onChange={(e) => setPhoto(e.target.files)}
          />
          <label htmlFor='file-upload' className="md:w-[300px] text-center ms-10 bg-[#26BDD2] text-white py-2 px-2 text-xs md:text-sm">
            Upload cover image
          </label>
        </div>
        {errors.photo && <p className="text-red-500 ml-4">{errors.photo}</p>}
        {errors.photo && <p className="text-red-500 ml-4">{errors.photo}</p>}

        <p className="md:ml-4 ml-4">Read time</p>
        <div className="w-[300px] p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector4} alt="" className="w-5 h-5" />
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Enter read time"
            name="readtime"
            onChange={(e) => setReadtime(e.target.value)}
            readOnly
            onChange={(e) => setReadtime(e.target.value)}
            readOnly
          />
        </div>
        {errors.readtime && <p className="text-red-500 ml-4">{errors.readtime}</p>}
        <p className="md:ml-4 ml-4 text-black">Story</p>
        {errors.readtime && <p className="text-red-500 ml-4">{errors.readtime}</p>}
        <p className="md:ml-4 ml-4 text-black">Story</p>
        <div className=" mr-4 ml-4 flex items-center gap-2">
          <textarea
            className=" focus:outline-none w-full h-[50vh] md:h-[80vh] border border-gray-400 p-2 rounded-md"
            type="text"
            placeholder="Write your story here"
            onChange={(e) => setStory(e.target.value)}
            onChange={(e) => setStory(e.target.value)}
          />
        </div>
        {errors.story && <p className="text-red-500 ml-4">{errors.story}</p>}
        {errors.story && <p className="text-red-500 ml-4">{errors.story}</p>}
        <div className="flex justify-between p-2">
          <button
            type="submit"
            name="publish"
            className="ml-2 md:py-3 md:px-[230px] px-11 py-3 rounded-md border text-white bg-[#26BDD2]"
          >
            Publish
          </button>

          <button
            type="submit" name="draft" className="mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50">
          <button
            type="submit" name="draft" className="mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50">
            Save to drafts
          </button>
        </div>
        </div>
      </form>
      <ToastContainer />
      <ToastContainer />
    </div>
  )};
