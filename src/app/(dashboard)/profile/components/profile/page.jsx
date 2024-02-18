import React from "react";
import Image from "next/image";
import ellipse from "@/assets/ellipse.png";
import styles from "@/app/profile/components/Published.module.css";
// import makeup from "@/assets/makeup.png";
// import ship from "@/assets/ship.png";
// import fire from "@/assets/fire.png";
// import eye from "@/assets/eye.png";
import Link from "next/link";
import TabsComponent from "./TabsComponent";
import Publish from "./publish/page";
import Draft from "./draft/page";

export default function Profile() {
  return (
    <div className="w-full md:max-w-[1440px]">
      <div className="w-[90%] md:w-[85%] mx-auto h-[auto] flex md:flex-row flex-col items-center py-10 gap-x-6">
        <div className="w-[4rem] md:w-[228px] ">
          <Image className="w-full" src={ellipse} alt="profile-image" />
        </div>
        <div className="w-full flex flex-col md:flex-row items-baseline">
          <div className="w-full">
            <h1 className="font-semibold text-3xl text-center md:text-left pt-4 md:pt-0 mb-3">
              Jane Doe
            </h1>
            <p className="w-full md:w-[607px]  text-center md:text-start md:ml-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              dolore! Qui ratione fuga distinctio facere ipsum natus praesentium
              rerum laboriosam dolor consequatur, adipisci nisi perspiciatis
              nemo cupiditate mollitia voluptatum beatae veniam consequuntur
              expedita maiores quas.
            </p>
            <div className="mt-2 flex gap-3 pt-5 md:pt-0">
              <span className="text-[12px]">15,000 views</span>
              <span className="text-[12px]">60 Published</span>
            </div>
          </div>
          <button className="md:mx-auto border border-[2px #26BDD2] px-3 rounded-md mt-5 md:mt-0">
            Edit
          </button>
        </div>
      </div>

      <div className="w-[90%] md:w-[85%] mx-auto mb-1 ">
        {/* <div className={styles.container}>
          <Link href={"/profile/components/profile/publish"}>
            <button className={styles.btn}>Published</button>
          </Link>
          <Link href={"/profile/components/profile/draft"}>
            <button className={styles.btn}>Draft</button>
          </Link>
        </div> */}
        <div className="px-[1.5rem]">
          <TabsComponent items={items}/>

        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 mb-3 ">
        <h1 className="text-[#808080] font-bold">Previous</h1>
        <ul className="flex items-center justify-center gap-2 text-[#808080]">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <h1 className="font-bold">Next</h1>
      </div>
    </div>
  );
}


const items = [
  {
    title: 'Published',
    content: (<Publish/>),
  },
  {
    title: 'Draft',
    content: (<Draft/> ),
  },
]