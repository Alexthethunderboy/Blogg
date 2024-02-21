"use client";

import { useState } from "react";
import Image from "next/image";
import Vector1 from "@/assests/Vector1.png";
import Vector2 from "@/assests/Vector2.png";
import Vector3 from "@/assests/Vector3.png";
import Vector4 from "@/assests/Vector4.png";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function EditDraftedForm({ id, title, tag, tagImage, readtime, story }) {
  const CLOUD_NAME = 'dnd3am4dm'
  const UPLOAD_PRESET = 'blog-project123'

  const [newTitle, setNewTitle] = useState(title);
  const [newTag, setNewTag] = useState(tag);
  const [photo, setPhoto] = useState(tagImage);
  const [newReadtime, setNewReadtime] = useState(readtime);
  const [newStory, setNewStory] = useState(story);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <p className="ml-4 font-weight-500">Title</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector1} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter title here"
            name="text"
            {...register("title")}
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
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
            name="text"
            {...register("tag")}
            onChange={(e) => setNewTag(e.target.value)}
            value={newTag}
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
            {...register("photo")}
            onChange={(e) => setPhoto(e.target.files[0])}
            // value={photo}
          />
          <label htmlFor='image' className="md:w-[300px] text-center ms-10 bg-[#26BDD2] text-white py-2 px-2 text-xs md:text-sm">
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
            onChange={(e) => setNewReadtime(e.target.value)}
            value={newReadtime}
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
            onChange={(e) => setNewStory(e.target.value)}
            value={newStory}
          />
        </div>
           <p className="text-red-500 ml-4">{errors.story?.message}</p>
        <div className="flex justify-between p-2">
          <button
            type="submit"
            className="ml-2 md:py-3 md:px-[230px] px-11 py-3 rounded-md border text-white bg-[#26BDD2]"
          >
            Publish
          </button>

          <button className="mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50">
            Save to drafts
          </button>
        </div>
      </form>
    </div>
   
  );
}

// <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <p className="ml-4 font-weight-500">Title</p>
//         <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
//           <Image src={Vector1} alt="titleImage" className="w-5 h-5" />
//           <input
//             className="w-full focus:outline-none"
//             type="text"
//             placeholder="Enter title here"
//             name="text"
//             onChange={(e) => setNewTitle(e.target.value)}
//             value={newTitle}
//             required
//           />
//         </div>

//         <p className="md:ml-4 ml-4 font-weight-700">Tag</p>
//         <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
//           <Image src={Vector2} alt="tagImage" className="w-5 h-5" />
//           <input
//             className="w-full focus:outline-none"
//             type="text"
//             placeholder="Enter tags here"
//             name="text"
//             onChange={(e) => setNewTag(e.target.value)}
//             value={newTag}
//             required
//           />
//         </div>

//         <p className="ml-4">Tag</p>
//         <div className="ps-2 mr-4 ml-4 flex justify-between items-center border border-slate-500 rounded gap-2">
//           {/* <label
//             htmlFor="file-upload"
//             className="md:pe-[50rem] pe-0 cursor-pointer"
//           >
//             <Image src={Vector3} alt="" className="w-5 h-5" />
//           </label>
//           <input
//             className="w-full me-10 focus:outline-none"
//             type="file"
//             id="file-upload"
//             accept=".jpg, .png, .jpeg"
//             onChange={(e) => setPhoto(e.target.value)}
//             placeholder="Choose cover image from files"
//           />
//           <button className="md:w-[300px] ms-10 bg-blue-400 text-white py-2 px-2 text-xs md:text-sm">
//             Upload cover image
//           </button> */}

//           <label htmlFor='image'>
//             Upload Image <Image src={Vector3} alt="uploadImage" className="w-5 h-5" />
//           </label>
//           <input id='image' type="file" style={{ display: 'none' }} onChange={(e) => setNewPhoto(e.target.files[0])}
//           value={newPhoto} />
//         </div>

//         <p className="md:ml-4 ml-4">Read time</p>
//         <div className="w-[300px] p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
//           <Image src={Vector4} alt="readtime image" className="w-5 h-5" />
//           {/* <label
//             htmlFor="readtime"
//             className="md:pe-[50rem] pe-0 cursor-pointer"
//           >
//             <Image src={Vector3} alt="" className="w-5 h-5" />
//           </label> */}
//           <input
//             className="focus:outline-none"
//             type="text"
//             placeholder="Enter read time"
//             name="readtime"
//             onChange={(e) => setNewReadtime(e.target.value)}
//             value={newReadtime}
//             required
//           />
//         </div>

//         <p className="md:ml-4 ml-4 text-black">Story</p>
//         <div className=" p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
//           <textarea
//             className="md:mb-[450px] focus:outline-none"
//             type="text"
//             placeholder="Write your story here"
//             onChange={(e) => setNewStory(e.target.value)}
//             value={newStory}
//             required
//           />
//         </div>
//         <div className="flex justify-between p-2">
//           <button
//             type="submit"
//             className="ml-2 md:py-3 md:px-[230px] px-11 py-3 rounded-md border text-white bg-blue-500"
//           >
//            Update Published Blog
//           </button>
//           <button className="mr-2 md:py-3 md:px-[230px] px-8 py-3 rounded-md border border-cyan-200 text-black bg-blue-50">
//             Save to drafts
//           </button>
//         </div>
//       </form>


{/* 
       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewTag(e.target.value)}
        value={newTag}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setNewTagImage(e.target.value)}
        value={newTagImage}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setNewReadtime(e.target.value)}
        value={newReadtime}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <input
        onChange={(e) => setNewStory(e.target.value)}
        value={newStory}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Published Blog
      </button>
    </form> */}
