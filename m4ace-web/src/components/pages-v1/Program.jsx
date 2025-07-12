import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ProgramCard from "../common/ProgramCard";
import Animation from "../common/Animation";

// const ProgramCard = ({ img, title }) => {
//   return (
//     <div
//       className="w-full md:w-[357px] h-[324px] rounded-[12px] py-[64px] pl-[96px] gap-[10px] flex flex-col text-[#220057] hover:bg-[#FF8C04] hover:text-white "
//       style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
//         onMouseEnter={}
//     >
//       <Image
//         src={`/images/icons/${img}.svg`}
//         alt={title}
//         height={63}
//         width={64}
//       />
//       <h3 className="font-[600] text-[24px] leading-[33.6px] ">{title}</h3>
//       {/* <button className="py-[12px] px-[38.56px] bg-white text-primary">
//         Get Started
//       </button> */}
//       <button className="py-[12px] pl-[18.56px] bg-white text-primary w-[165px]">
//         <div className="flex items-center justify-center gap-x-3">
//           <span>Get Started</span> <FiArrowRight size={18} />
//         </div>
//       </button>
//     </div>
//   );
// };
const Program = () => {
  return (
    <section className="py-[30px]">
      <div className="w-full md:w-[620px] mb-[30px] text-center mx-auto px-6">
        <h1 className="font-[700] text-[24px] md:text-[30px] leading-[42px] text-[#222057] text-center mb-4">
          Get {""}
          <span className="text-primary">FREE Data Sub.</span> for our{" "}
          <span className="text-primary">Free Program!</span>
        </h1>
        <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
          Sign up now and receive a complimentary Data Sub, absolutely FREE, To
          unlock your Tech journey
        </p>
      </div>
      <div
        id="programs"
        className="grid grid-cols-1 md:grid-cols-3 gap-[20px] px-6 md:pl-[164px] md:pr-[110px] py-[30px] w-screen bg-white"
      >
        <Animation style="fade-left" placement="center-center">
          <ProgramCard img="frontend" title="Frontend Dev." />
        </Animation>
        <Animation style="fade-right" placement="center-center">
          <ProgramCard img="backend" title="Backend Dev." />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <ProgramCard img="cloud" title="Cloud Computing" />
        </Animation>
        <Animation style="fade-right" placement="center-center">
          <ProgramCard img="product" title="Product Design" />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <ProgramCard img="content" title="Content Writing" />
        </Animation>
        <Animation style="fade-right" placement="center-center">
          <ProgramCard img="cybersecurity" title="Cybersecurity" />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <ProgramCard img="product" title="Brand Identity Design" />
        </Animation>
      </div>
    </section>
  );
};

export default Program;
