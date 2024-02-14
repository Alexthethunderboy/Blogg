'use client';

import Image from "next/image";
import React from "react";
import heroImg from "@/assets/Frame 10.png";
import img2 from "@/assets/Frame 13.png";
import img3 from "@/assets/Frame 21.png";
import img4 from "@/assets/Frame 21 (1).png";
import img5 from "@/assets/Frame 21 (3).png";
import img6 from "@/assets/Frame 30.png";
import img7 from "@/assets/Frame 30 (1).png";
import img8 from "@/assets/Frame 30 (2).png";
import img9 from "@/assets/Frame 30 (4).png";
import img10 from "@/assets/Frame 30 (5).png";
import img11 from "@/assets/Frame 30 (6).png";
import img12 from "@/assets/Frame 30 (7).png";
import img13 from "@/assets/Frame 30 (8).png";
import img14 from "@/assets/Frame 30 (9).png";
import eye from "@/assets/Vector.png";
import Link from "next/link";
import { useSession } from "next-auth/react";


const Homepage = () => {
  const { data: session } = useSession();
  
  
  return (
    <section className="border-t-2 border-blue-400">
      <div className="md:mx-[5rem] mt-10 md:flex mx-5">
        <div className="md:basis-1/2 flex flex-col items-center justify-center text-center md:text-start md:items-start  gap-5">
          <h1 className="md:text-7xl text-6xl font-bold md:w-[29rem]">
            From You To The World
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum diam volutpat
            ultrices nisi. Ligula eu aliquet sagittis sit. In justo lectus at
            rhoncus faucibus nulla sapien.
          </p>
          {!session ? (
            <>
              <Link href={'/signUp'}>
                <button className="bg-blue-400 p-2 rounded w-[9rem] text-white">
                Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
            <Link href={'/blog/blog-components'}>
            <button className="bg-blue-400 p-2 rounded w-[9rem] text-white">
            Create blog
            </button>
          </Link>
          </>
          )}
        </div>
        <div className="md:basis-1/2 mt-10 md:mt-0">
          <Image src={heroImg} alt="printer" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 mt-10 border-t-2 border-blue-400">
        <div className="md:ms-[5rem] mx-5 md:mx-0 flex  flex-col gap-5 md:basis-1/2 mt-10">
          <h1 className="text-2xl font-bold">Trending</h1>
          <Image src={img2} />
          <div className="flex gap-2 text-sm items-center text-[#626060]">
            <p className="bg-[#D22697] rounded p-1 text-white">Self defence</p>
            <div className="flex gap-1 items-center">
              <Image src={eye} />
              <p>views</p>
            </div>
            <div className="flex items-center">
              <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
              <p>4 mins read</p>
            </div>
            <p>9/09/2023</p>
          </div>
          <h1 className="text-2xl font-semibold ">
            The importance of self defense: In teenagers
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor sed
            et vitae dolor. Duis nunc lectus suspendisse accumsan consequat id.
            Commodo scelerisque urna donec volutpat imperdiet.
          </p>
        </div>
        <div className="md:basis-1/2 flex flex-col mx-5 md:mx-0 gap-5 mt-10 md:pe-[5rem]">
          <h1 className="text-2xl font-bold ">Most Read</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-5">
              <Image src={img3} width={150}  className="w-full md:w-30"/>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-[#626060] text-sm">
                  <p className="bg-blue-700 rounded p-1 text-white">
                    Construction
                  </p>
                  <div className="flex gap-1 items-center">
                    <Image src={eye} />
                    <p>views</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                    <p>4 mins read</p>
                  </div>
                  <p>9/09/2023</p>
                </div>
                <h1 className="text-2xl font-semibold">
                  The challenges construction workers are facing
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus magna
                  porttitor sed et vitae dolor. Duis nunc lectus suspendisse
                  accumsan consequat id. Commodo scelerisque urna donec volutpat
                  imperdiet.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Image src={img4} width={150} className="w-full md:w-30"/>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-[#626060] text-xs">
                  <p className="bg-green-600 rounded p-1 text-white">
                    Health care
                  </p>
                  <div className="flex gap-1 items-center">
                    <Image src={eye} />
                    <p>views</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                    <p>4 mins read</p>
                  </div>
                  <p>9/09/2023</p>
                </div>
                <h1 className="text-2xl font-semibold">
                  The impact of herd immunity in the general populace
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus magna
                  porttitor sed et vitae dolor. Duis nunc lectus suspendisse
                  accumsan consequat id. Commodo scelerisque urna donec volutpat
                  imperdiet.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <Image src={img5} width={150} className="w-full md:w-30"/>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center text-[#626060] text-xs">
                  <p className="bg-purple-700 rounded py-1 px-3 text-white">
                    Sports
                  </p>
                  <div className="flex gap-1 items-center">
                    <Image src={eye} />
                    <p>views</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                    <p>4 mins read</p>
                  </div>
                  <p>9/09/2023</p>
                </div>
                <h1 className="text-2xl font-semibold">
                  The Olympic community concluded that karate...
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus magna
                  porttitor sed et vitae dolor. Duis nunc lectus suspendisse
                  accumsan consequat id. Commodo scelerisque urna donec volutpat
                  imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-[5rem] my-10 mx-5">
        <div className="flex md:gap-10 gap-5 items-center mb-5">
          <h1 className="text-2xl font-bold">Popular</h1>
          <p className="bg-purple-700 rounded py-1 px-3 text-white">Sports</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img6} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
                The Evolution of Basketball: From Peach Baskets to Slam Dunks
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img7} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
                Soccer vs. American Football: A Comparative Analysis of
                Global...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img10} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
                Soccer vs. American Football: A Comparative Analysis of
                Global...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-[5rem] mx-5 my-10">
        <div className="flex gap-5 md:gap-10 items-center mb-5">
          <h1 className="text-2xl font-bold">Popular</h1>
          <p className="bg-green-600 rounded p-1 text-white">
                    Health care
                  </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img9} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              Intermittent Fasting: Is It the Right Approach for Weight Loss and...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img10} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              The Power of Plant-Based Eating: Exploring the Benefits of a Vega...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img12} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              The Importance of Mindfulness Meditation in Managing Chronic...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:m-[5rem] mx-5 my-10">
        <div className="flex md:gap-10 gap-5 items-center mb-5">
          <h1 className="text-2xl font-bold">Popular</h1>
          <p className="bg-yellow-700 rounded py-1 px-3 text-white">Entertainment</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5">
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img12} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              From Harry Potter to Dune: A Journey into the World of Book...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img13} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              The Art of Stand-Up Comedy: A Look at the Craft of Making ...
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-2">
              <Image src={img7} />
              <div className="flex gap-2 items-center text-[#626060]">
                <div className="flex gap-1 items-center">
                  <Image src={eye} />
                  <p>views</p>
                </div>
                <div className="flex items-center">
                  <div className="rounded-[50%] text-blue-400  bg-blue-400 me-1 text-xl w-1 h-1"></div>
                  <p>4 mins read</p>
                </div>
                <p>9/09/2023</p>
              </div>
              <h1 className="text-xl font-semibold">
              The Cultural Impact of Video Games: From Pong to eSports
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Rhoncus magna porttitor
                sed et vitae dolor. Duis nunc lectus suspendisse accumsan
                consequat id. Commodo scelerisque urna donec volutpat imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
