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
      <div className="w-full h-[50vh] flex md:flex-row flex-col xl:static items-center md:px-[6rem]  mb-16">
        <div>
          <Image
            className="md:w-[165px] md:mr-[30px] ml-[0] md:ml-[0] pt-10 xl:pt-0"
            src={ellipse}
            alt="profile-image"
          />
        </div>

        <div className="px- md:px-0">
          <h1 className="font-bold text-xl text-center xl:text-left pt-4 xl:pt-0 mb-3">
            Jane Doe
          </h1>

          <p className="xl:w-[700px]  text-center xl:text-start xl:ml-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolore!
            Qui ratione fuga distinctio facere ipsum natus praesentium rerum
            laboriosam dolor consequatur, adipisci nisi perspiciatis nemo
            cupiditate mollitia voluptatum beatae veniam consequuntur expedita
            maiores quas.
          </p>

          <div className="mt-2 flex gap-3 ml-[320px] pt-5 xl:pt-0">
            <span className="text-[12px]">15,000 views</span>
            <span className="text-[12px]">60 Published</span>
          </div>
        </div>
        {/* <div className="right-40px bottom-[40px] absolute xl:static">
          <button className="xl:mx-auto xl:ml-[140px] ml-[650px] border border-[2px #26BDD2] px-3 rounded-md">
            Edit
          </button>
        </div> */}
      </div>
      <div className="xl:px-[6rem] xl:pt-2 md:left-[210px] xl:static">
        <div className={styles.container}>
          <button className={styles.btn}>Published</button>
          <h3 className={styles.text}>Drafts</h3>
        </div>
      </div>

      <div className="md:w-full mt-10 mb-8 flex flex-col items-center gap-5 bg-red-500">
        <div  className="md:mr-[30px] xl:mr-[50px]">
          {profileData.map((pro) => (
             <div key={pro.id}>
             <PublishedList
               img={pro.img}
               views={pro.makeup}
               beauty={pro.beauty}
               title={pro.title}
             />
             {/* <div >
                <h2>{pro.makeup}</h2>
                <h2>{pro.beauty}</h2>
                <h2>{pro.title}</h2>
             </div> */}
           </div>
          ))}
        </div>
        {/* <div className="md:mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={makeup
            views={eye}
            beauty={"Beauty & Fashion"}
            title={
              "The impact of beauty products on self esteem of individuals"
            }
          />
        </div>
        <div className="mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={ship}
            views={eye}
            beauty={"History"}
            title={"The evolution of fire"}
          />
        </div>
        <div className="mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={fire}
            views={eye}
            beauty={"Lifestyle"}
            title={"30 days as a sea farer"}
          />
        </div>
        <div className="mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={makeup}
            views={eye}
            beauty={"Beauty & Fashion"}
            title={
              "The impact of beauty products on self esteem of individuals"
            }
          />
        </div>
        <div className="mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={ship}
            views={eye}
            beauty={"History"}
            title={"The evolution of fire"}
          />
        </div>
        <div className="mr-[30px] xl:mr-[50px]">
          <PublishedList
            img={fire}
            views={eye}
            beauty={"Lifestyle"}
            title={"30 days as a sea farer"}
          />
        </div> */}
      </div>
      <div className="flex items-center justify-center space-x-5 mb-3 ml-[125px] xl:ml-0">
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
