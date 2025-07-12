import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const PatronCard = ({ color, name, img, title, x, linkedin, facebook }) => {
  return (
    <section className="w-[270.15px] relative min-h-[400px]">
      <div
        className={`absolute top-[16px] rounded-[16px] w-[252px] border border-black
         ${color ? `bg-${color}` : "bg-[#DC761A]"}  min-h-[400px] h-full`}
      ></div>
      <div className="absolute left-[13.15px] p-[16px] rounded-[16px] w-[257px] border border-black bg-[rgb(251,230,204)]">
        <Image
          src={`/images/${img}`}
          width={225}
          height={225}
          alt={`m4ace patron ${name}`}
          className="mb-[10px] min-h-[225px] max-h-[225px]"
        />
        <div className="className='relative flex flex-col items-center gap-2 mt-[20px]'">
          <div className="">
            <p className="text-[20px] leading-[30px] font-[500] text-[#1e1e1e] text-center">
              {name}
            </p>
            <p className="text-[15px] leading-[27px] font-[400] text-[#1e1e1e] text-center">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-[3px]">
            <div className="w-[30px] h-[30px] rounded-[8px] border-[0.5px] border-[#B5A8A8] p-[7px] flex items-center justify-center bg-white">
              <a href={x} target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={16} />
              </a>
            </div>
            <div className="w-[30px] h-[30px] rounded-[8px] border-[0.5px] border-[#B5A8A8] p-[7px] flex items-center justify-center bg-white">
              <a
                href={facebook ? facebook : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
            <div className="w-[30px] h-[30px] rounded-[8px] border-[0.5px] border-[#B5A8A8] p-[7px] flex items-center justify-center bg-white">
              <a
                href={linkedin ? linkedin : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[10px]">
          <button className="font-[400] text-[12px] leading-[27px] text-primary underline">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatronCard;
