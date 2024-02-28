"use client";

import { useState } from "react";
import Image from "next/image";
import Vector1 from "@/assets/Vector1.png";
import Vector2 from "@/assets/Vector2.png";
import Vector3 from "@/assets/Vector3.png";
import Vector3 from "@/assets/Vector3.png";
import Vector4 from "@/assets/Vector4.png";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


import { useSession } from "next-auth/react";



export default function EditDraftedForm({ id, title, tag, tagImage, readtime, story }) {
  const CLOUD_NAME = 'dnd3am4dm'
  const UPLOAD_PRESET = 'blog-project123'

  const [errors, setErrors] = useState({})
  const [newTitle, setNewTitle] = useState(title);
  const [newTag, setNewTag] = useState(tag);
  const [photo, setPhoto] = useState(tagImage);
  const [newReadtime, setNewReadtime] = useState(readtime);
  const [newStory, setNewStory] = useState(story);

  const router = useRouter();

  const onSubmit = async (data, e) => {
    // setNewTitle(e.target[0].value)
    // setNewTag(e.target[1].value)
    // setPhoto(e.target[2].files[0])
    // setNewReadtime(e.target[3].value)
    // setNewStory(e.target[4].value)
    // const title = e.target[0].value; 
    // const tag = e.target[1].value; 
    // const photo = e.target[2].files[0] 
    // const readtime = e.target[3].value; 
    // const story = e.target[4].value; 


    console.log(newTitle, newTag, photo, newReadtime, newStory);
    try {
      const newTagImage = await uploadImage(photo)

      const res = await fetch(`/api/published/${id}`, {
        method: "PUT",
        headers: {
          "content-Type": "aplication/json",
        },
        body: JSON.stringify({ newTitle, newTag, newTagImage, newReadtime, newStory }),
      });

      if (res.status === 201) {
        router.push("/profile");
        alert(`succesfully sent`)
      } else {
        throw new Error("Failed to edit publish ");
      }
      if (res.status === 500) {
        alert(`There's a problem`);
      }
    } catch (error) {
      console.log(error);
    }
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

      const tagImage = data['secure_url']
      console.log(tagImage);

      return tagImage
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className="w-[90%] mx-auto mb-14 py-[20rem">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <div className="w-[90%] mx-auto mb-14 py-[20rem">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="ml-4 font-weight-500">Title</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector1} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter title here"
            name="text"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
        </div>
           {errors.newTitle && <p className="text-red-500 ml-4">{errors.newTitle}</p>}
           {errors.newTitle && <p className="text-red-500 ml-4">{errors.newTitle}</p>}

        <p className="md:ml-4 ml-4 font-weight-700">Tag</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector2} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter tags here"
            name="text"
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
          />
        </div>
           {errors.newTag && <p className="text-red-500 ml-4">{errors.newTag}</p>}
           {errors.newTag && <p className="text-red-500 ml-4">{errors.newTag}</p>}

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
          <label htmlFor='image' className="md:w-[300px] text-center ms-10 bg-[#26BDD2] text-white py-2 px-2 text-xs md:text-sm">
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
            onChange={(e) => setNewReadtime(e.target.value)}
            value={newReadtime}
          />
        </div>
          {errors.newReadtime && <p className="text-red-500 ml-4">{errors.newReadtime}</p>}
          {errors.newReadtime && <p className="text-red-500 ml-4">{errors.newReadtime}</p>}
          <p className="md:ml-4 ml-4 text-black">Story</p>
        <div className=" mr-4 ml-4 flex items-center gap-2">
          <textarea
            className=" focus:outline-none w-full h-[50vh] md:h-[80vh] border border-gray-400 p-2 rounded-md"
            type="text"
            placeholder="Write your story here"
            onChange={(e) => setNewStory(e.target.value)}
            value={newStory}
          />
        </div>
           {errors.newStory && <p className="text-red-500 ml-4">{errors.newStor }</p>}
           {errors.newStory && <p className="text-red-500 ml-4">{errors.newStor }</p>}
        <div className="flex justify-between p-2">
        <button
        <button
            type="submit"
            name="publish"
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
      </form>
    </div>
   
  );
}

