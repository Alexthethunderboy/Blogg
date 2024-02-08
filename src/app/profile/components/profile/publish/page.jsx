import React from "react";
import { profileData } from "../ProfileDb";
import PublishedList from "../../publishedLists/PublishedList";

export default function Publish() {
  return (
    <div>
      {profileData.map((pro) => (
            <div key={pro.id}>
              <PublishedList
                img={pro.img}
                views={pro.makeup}
                beauty={pro.beauty}
                title={pro.title}
              />
            </div>
          ))}
    </div>
  );
}
