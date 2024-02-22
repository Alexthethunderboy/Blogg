import React from "react";
import { profileData } from "../ProfileDb";
import PublishedList from "../../publishedLists/PublishedList";

const getDraftedBlog = async () => {
  const res = await fetch("http://localhost:3000/api/draft", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch published Blogs");
  }

  return await res.json();
}

export default async function Draft() {
  const { draftBlog } = await getDraftedBlog();
  return (
    <div>
      <div>
        {draftBlog.map((p) => (
          <div
            key={p._id}
            className="w-full mx-auto"
          >
            <PublishedList
              img={p.tagImage}
              // views={p.readtime}
              title={p.title}
              beauty={p.tag}
              href={`/Published/components/editDraftBlog/${p._id}`}
              removeId={p._id}
            />
          </div>
        ))}
      </div>

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
    </div>
  );
}