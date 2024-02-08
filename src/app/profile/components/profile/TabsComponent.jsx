"use client";
import { useState, useEffect, useRef } from "react";
import styles from "@/app/profile/components/Published.module.css";


const TabsComponent = ({items}) => {
     const [selectedTab, setSelectedTab] = useState(0);
     const firstBtnRef = useRef();

     useEffect(() => {
       firstBtnRef.current.focus();
     }, []);
  return (
    <div>
      <div className="flex flex-col gap-y-2 w-full">
        <div
          className={`w-[12rem] p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-[#26BDD2] mb-4 ${styles.container}`}
        >
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-[#26BDD2] hover:text-white rounded-t-lg text-cneter  ${
                selectedTab === index ? "bg-[#26BDD2] text-white" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className=" p-2 rounded-xl">
          {items.map((item, index) => (
            <div className={`${selectedTab === index ? "" : "hidden"}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
