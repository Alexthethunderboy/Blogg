import Image from "next/image";
// import image4 from "@/Vector (1).png";
import { IoMdEye } from "react-icons/io";



function RecommendedCard(props) {
  return (
    <div className="">
      <Image src={props.image} className="pt-[2rem]" alt="" />
        <div className="flex gap-[1.5rem] pt-5 pb-2">
            <div className="flex gap-1">
                {/* <div className="pt-1">
                    <Image src={props.view} alt="" />
                </div> */}
                <div>
                <IoMdEye/>
                <p>views</p>
                </div>
            </div>
            <div className="flex relative">
                <div className="absolute left-[-.7rem] bottom-1">
                    <button className="rounded border border-[#26BDD2] px-[2px] py-0.5 bg-[#26BDD2]"></button>
                </div>
                <p className="">4 mins read</p>
            </div>
            <h1 className="">9/09/2023</h1>
        </div>
        <div>
            <h3 className="font-bold xl:text-[24px] text-[20px]">{props.text}</h3>
        </div>
        <p className="text-[14px]">{props.paragraph}</p>
    </div>
  );
}

export default RecommendedCard;
