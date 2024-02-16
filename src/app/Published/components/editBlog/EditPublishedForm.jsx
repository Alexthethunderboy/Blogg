"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPublishedForm({ id, title, tag, tagImage, readtime, story }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newTag, setNewTag] = useState(tag);
  const [newTagImage, setNewTagImage] = useState(tagImage);
  const [newReadtime, setNewReadtime] = useState(readtime);
  const [newStory, setNewStory] = useState(story);


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/published/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newTag, newTagImage, newReadtime, newStory }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Published Blog");
      }

      router.refresh();
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
    </form>
  );
}
