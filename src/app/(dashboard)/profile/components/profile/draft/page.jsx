import React from "react";
import { profileData } from "../ProfileDb";
import PublishedList from "../../publishedLists/PublishedList";

export default function Draft() {
  return (
    <div>
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
