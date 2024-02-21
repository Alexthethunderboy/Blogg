"use client";

import React, { useEffect, useRef, useState } from "react";
import Vector1 from "@/assets/Vector1.png";
import Image from "next/image";
import Vector2 from "@/assets/Vector2.png";
import Vector3 from "@/assets/Vector3.png";
import Vector4 from "@/assets/Vector4.png";
import "@/app/(dashboard)/globals.css";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const schema = yup
  .object({
    title: yup.string().required('title is required ')
    .min(4, 'title cannot be less than 4')
    .max(40, 'title cannot be more than 40'),
    tag: yup.string().required('tag is required ')
    .min(4, 'tag cannot be less than 4')
    .max(25, 'tag cannot be more than 25'),
    photo: yup.string().required('photo is required '),
    readtime: yup.string().required('readtime is required ')
    .min(4, 'readtime cannot be less than 4')
    .max(20, 'readtime cannot be more than 10'),
    story: yup.string().required('story is required ')
    .min(10, 'story cannot be less than 10')
    .max(100, 'story cannot be more than 100'),
  })
  .required();

export default function NewBlog() {
  const CLOUD_NAME = 'dnd3am4dm'
  const UPLOAD_PRESET = 'blog-project123'
  const router = useRouter();
  const photoFile = useRef(null)

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>
    
  }

  if (status === 'unauthenticated') { 
    router.push("/");
      return null
  }

  const {
    register,
    handleSubmit: handleSubmitForm,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitPublish = async (data) => {
    const { title, tag , photo, readtime, story } = data;

    const photo2 = photo[2]
    console.log(photo2);
    console.log('Photo file:', photo2);
    // const photo = photoFile.current.files[0];
    // const photo = data.target[2].files[0]
    // const photo = e.target[2].files[0]

    console.log(title, tag, photo2, readtime, story);
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
        return router.push("/profile");
        // alert(`succesfully sent`)

      } else {
        throw new Error("Failed to publish");
      }
      if (res.status === 500) {
        alert(`There's a problem`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitDraft = async (data) => {
    const { title, tag, photo, readtime, story } = data;
    // const photo2 = photoFile.current.files[0];
    // const photo = data.target[2].files[0]
    // const photo = e.target[2].files[0]


    console.log(title, tag, photo, readtime, story);
    try {
      const tagImage = await uploadImage(photo)

      const res = await fetch("http://localhost:3000/api/draft", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ title, tag, tagImage, readtime, story }),
      });

      if (res.status === 201) {
        router.push("/profile/draft");
        alert(`succesfully sent`)
      } else {
        throw new Error("Failed to publish");
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

    formData.append("file", photo[0])
    formData.append("upload_preset", UPLOAD_PRESET)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      })

      const data = await res.json()
      console.log(data);

      const tagImage = data[`secure_url`]
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
      <form  className="flex flex-col gap-4">
        <p className="ml-4 font-weight-500">Title</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector1} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter title here"
            name="text"
            {...register("title")}
          />
        </div>
           <p className="text-red-500 ml-4">{errors.title?.message}</p>

        <p className="md:ml-4 ml-4 font-weight-700">Tag</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector2} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter tags here"
            name="tag"
            {...register("tag")}
          />
        </div>
           <p className="text-red-500 ml-4">{errors.tag?.message}</p>

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
            {...register("photo", { type: "file" })}
            // ref={photoFile}
            // {...register("photo")}
          />
          <label htmlFor='file-upload' className="md:w-[300px] text-center ms-10 bg-[#26BDD2] text-white py-2 px-2 text-xs md:text-sm">
            Upload cover image
          </label>
        </div>
          <p className="text-red-500 ml-4">{errors.photo?.message}</p>

        <p className="md:ml-4 ml-4">Read time</p>
        <div className="w-[300px] p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector4} alt="" className="w-5 h-5" />
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Enter read time"
            name="readtime"
            {...register("readtime")}
          />
        </div>
          <p className="text-red-500 ml-4">{errors.readtime?.message}</p>
          <p className="md:ml-4 ml-4 text-black">Story</p>
        <div className=" mr-4 ml-4 flex items-center gap-2">
          <textarea
            className=" focus:outline-none w-full h-[50vh] md:h-[80vh] border border-gray-400 p-2 rounded-md"
            type="text"
            placeholder="Write your story here"
            {...register("story")}
          />
        </div>
           <p className="text-red-500 ml-4">{errors.story?.message}</p>
        <div className="flex justify-between p-2">
        </div>
      </form>
          <button
            type="button"
            onClick={handleSubmitForm(onSubmitPublish)}
            className="ml-2 md:py-3 md:px-[230px] px-11 py-3 rounded-md border text-white bg-[#26BDD2]"
          >
            Publish
          </button>

          <button onClick={handleSubmitForm(onSubmitDraft)} type="button" className="mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50">
            Save to drafts
          </button>
          <ToastContainer />
    </div>
  );
}
