import React from "react";
import Image from "next/image";
import ellipse from "@/assets/ellipse.png";
import styles from "@/app/profile/components/Published.module.css";
// import makeup from "@/assets/makeup.png";
// import ship from "@/assets/ship.png";
// import fire from "@/assets/fire.png";
// import eye from "@/assets/eye.png";
import PublishedList from "@/app/profile/components/publishedLists/PublishedList";
import { profileData } from "./ProfileDb";

export default function Profile() {
  return (
    <div className="md:w-full md:max-w-[1440px]">
      <div className="w-full h-[50vh] flex md:flex-row flex-col md:static items-center md:px-[6rem]  mb-16">
        <div>
          <Image className="md:w-[165px] md:mr-[30px] ml-[0] md:ml-[0] pt-10 md:pt-0" src={ellipse} alt="profile-image"/>
        </div>

        <div className="px- md:px-0">
          <h1 className="font-bold text-md text-center md:text-left pt-4 md:pt-0 mb-3">Jane Doe</h1>
          <p className="md:w-[700px]  text-center md:text-start md:ml-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolore!
            Qui ratione fuga distinctio facere ipsum natus praesentium rerum
            laboriosam dolor consequatur, adipisci nisi perspiciatis nemo
            cupiditate mollitia voluptatum beatae veniam consequuntur expedita
            maiores quas.
          </p>
          <div className="mt-2 flex gap-3 pt-5 md:pt-0">
            <span className="text-[12px]">15,000 views</span>
            <span className="text-[12px]">60 Published</span>
          </div>
        </div>
        <div className="right-40px bottom-[40px] md:static">
          <button className="md:mx-auto md:ml-[140px] ml-[650px] border border-[2px #26BDD2] px-3 rounded-md">Edit</button>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-10 mb-8  bg-red-500">
        <div className={styles.container}>
          <button className={styles.btn}>Published</button>
          <h3 className={styles.text}>Drafts</h3>
        </div>
        <div  className="me-[30px] md:mr-[50px]">
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
        {/* <div className="md:mr-[30px] md:mr-[50px]">
          <PublishedList
            img={makeup
            views={eye}
            beauty={"Beauty & Fashion"}
            title={
              "The impact of beauty products on self esteem of individuals"
            }
          />
        </div>
        <div className="mr-[30px] md:mr-[50px]">
          <PublishedList
            img={ship}
            views={eye}
            beauty={"History"}
            title={"The evolution of fire"}
          />
        </div>
        <div className="mr-[30px] md:mr-[50px]">
          <PublishedList
            img={fire}
            views={eye}
            beauty={"Lifestyle"}
            title={"30 days as a sea farer"}
          />
        </div>
        <div className="mr-[30px] md:mr-[50px]">
          <PublishedList
            img={makeup}
            views={eye}
            beauty={"Beauty & Fashion"}
            title={
              "The impact of beauty products on self esteem of individuals"
            }
          />
        </div>
        <div className="mr-[30px] md:mr-[50px]">
          <PublishedList
            img={ship}
            views={eye}
            beauty={"History"}
            title={"The evolution of fire"}
          />
        </div>
        <div className="mr-[30px] md:mr-[50px]">
          <PublishedList
            img={fire}
            views={eye}
            beauty={"Lifestyle"}
            title={"30 days as a sea farer"}
          />
        </div> */}
      </div>
      <div className="flex items-center justify-center space-x-5 mb-3 ml-[125px] md:ml-0">
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
