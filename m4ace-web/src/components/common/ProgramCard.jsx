"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// import "./ProgramCard.css"; // assuming you have a CSS file for styling

const ProgramCard = ({ img, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`w-full md:w-[357px] h-[324px] rounded-[12px] relative overflow-hidden group cursor-pointer flip-container py-[64px] flex flex-col pl-[66px] gap-[10px] ${
        isFlipped ? "flipped bg-[#FF8C04]" : ""
      }`}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flipper">
        <div className="front">
          <div className="w-full h-full bg-white rounded-[12px] shadow-md flex flex-col gap-[24px]">
            <Image
              src={`/images/icons/${img}.svg`}
              alt={title}
              height={63}
              width={64}
            />
            <h3 className="font-[600] text-[24px] leading-[33.6px] ">
              {title}
            </h3>
          </div>
        </div>
        <div className="back">
          <div className="w-full h-full bg-primary rounded-[12px] shadow-md flex flex-col gap-[24px]">
            <Image
              src={`/images/icons/${img}-w.svg`}
              alt={title}
              height={63}
              width={64}
            />
            <h3 className="font-[600] text-[24px] leading-[33.6px] text-white ">
              {title}
            </h3>
            <Link
              href={"/registration"}
              className="py-[12px] pl-[18.56px] bg-white text-primary w-[165px] border border-white rounded-[24px]"
            >
              <div className="flex items-center justify-center gap-x-3">
                <span>Get Started</span> <FaLongArrowAltRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
