"use client";

import { useState } from "react";
import Image from "next/image";
import Vector1 from "@/assets/Vector1.png";
import Vector2 from "@/assets/Vector2.png";
import Vector3 from "@/assets/Vector3.png";
import Vector4 from "@/assets/Vector4.png";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";



export default function EditPublishedForm({ id, title, tag, tagImage, readtime, story }) {
  const CLOUD_NAME = 'dnd3am4dm'
  const UPLOAD_PRESET = 'blog-project123'

  const [errors, setErrors] = useState({})
  const [newTitle, setNewTitle] = useState(title);
  const [newTag, setNewTag] = useState(tag);
  const [photo, setPhoto] = useState(tagImage);
  const [newReadtime, setNewReadtime] = useState(readtime);
  const [newStory, setNewStory] = useState(story);

  const router = useRouter();

  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>

  }

  if (status === 'unauthenticated') {
    router.push("/");
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buttonType = window.event.submitter.name

    
    let newErrors = {};

    // Check for errors
    if (!newTitle.trim()) {
      newErrors.newTitle = "Title is required";
    }else if (newTitle.trim().length < 5){
      newErrors.newTitle = "Title cannot be less than 5";
    }

    if (!newTag.trim()) {
      newErrors.newTag = "Tag is required";
    }else if (newTag.trim().length < 5 ){
      newErrors.newTag = "Tag cannot be less than 5";
    }else if (newTag.trim().length > 20 ){
      newErrors.newTag = "Tag cannot be more than 20";
    }


    if (!photo) {
      newErrors.photo = "Photo is required";
    }

    // if (!newReadtime.trim()) {
    //   newErrors.newReadtime = "Readtime is required";
    // }else if (newReadtime.trim().length < 5){
    //   newErrors.newReadtime = "Readtime cannot be less than 5";
    // }else if (newReadtime.trim().length > 20){
    //   newErrors.newReadtime = "Readtime cannot be more than 20";
    // }

    if (!newStory.trim()) {
      newErrors.newStory = "Story is required";
    }else if (newStory.trim().length < 25) {
      newErrors.newStory = "Story cannot be less than 25";
    }else if (newStory.trim().length > 150) {
      newErrors.newStory = "Story cannot be more than 150";
    }

    // If there are errors, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});


    const photo2 = photo[0]
    console.log(photo2);

    if(buttonType === "publish"){
      //HANDLE Publish FUNCTION
      try {
        const newTagImage = await uploadImage(photo2)
        // setPhoto(newTagImage)
        const res = await fetch(`http://localhost:3000/api/published/${id}`, {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({newTitle, newTag, newTagImage, newReadtime, newStory}),
        });
  
        if (res.status === 200) {
          toast("successfully updated Published")
          return router.replace("/profile");
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
      return;
      }
  
      if(buttonType === "draft"){
       //HANDLE DRAFT FUNC
       try {
        const newTagImage = await uploadImage(photo2)
        const res = await fetch(`http://localhost:3000/api/draft/${id}`, {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({newTitle, newTag, newTagImage, newReadtime, newStory}),
        });
  
        if (res.status === 200) {
          router.replace("/profile");
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
      return;
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
        <p className="ml-4 font-weight-500">Title</p>
        <div className="p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector1} alt="" className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Enter newTitle here"
            name="text"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
        </div>
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
          />
          <label htmlFor='image' className="md:w-[300px] text-center ms-10 bg-[#26BDD2] text-white py-2 px-2 text-xs md:text-sm">
            Upload cover image
          </label>
        </div>
          {errors.photo && <p className="text-red-500 ml-4">{errors.photo}</p>}

        <p className="md:ml-4 ml-4">Read time</p>
        <div className="w-[300px] p-2 mr-4 ml-4 flex items-center border border-slate-500 rounded gap-2">
          <Image src={Vector4} alt="" className="w-5 h-5" />
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Enter read time"
            name="newReadtime"
            onChange={(e) => setNewReadtime(e.target.value)}
            value={newReadtime}
          />
        </div>
          {errors.newReadtime && <p className="text-red-500 ml-4">{errors.newReadtime}</p>}
          <p className="md:ml-4 ml-4 text-black">Story</p>
        <div className=" mr-4 ml-4 flex items-center gap-2">
          <textarea
            className=" focus:outline-none w-full h-[50vh] md:h-[80vh] border border-gray-400 p-2 rounded-md"
            type="text"
            placeholder="Write your newStory here"
            onChange={(e) => setNewStory(e.target.value)}
            value={newStory}
          />
        </div>
           {errors.newStory && <p className="text-red-500 ml-4">{errors.newStory}</p>}
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
            Save to drafts
          </button>
        </div>
      </form>
    </div>
   
  );
}
