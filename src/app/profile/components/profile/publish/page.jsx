import React from "react";
import { profileData } from "../ProfileDb";
import PublishedList from "../../publishedLists/PublishedList";
import RemoveBtn from "../../buttons/RemoveBtn";

const getPublishedBlog = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/published", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Publish() {
  const { publishedBlog } = await getPublishedBlog();
  return (
    <div>

      {publishedBlog.map((p) => (
        <div
          key={p._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{p.title}</h2>
            <div>{p.tag}</div>
            <div>{p.tagImage}</div>
            <div>{p.readtime}</div>
            <div>{p.story}</div>
            {/* title, tag, tagImage, readtime, story */}
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editPublished/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}

      {profileData.map((pro) => (
        <div key={pro.id}>
          <PublishedList
            img={pro.img}
            views={pro.views}
            beauty={pro.beauty}
            title={pro.title}
          />
        </div>
      ))}

      { }
    </div>
  );
}
