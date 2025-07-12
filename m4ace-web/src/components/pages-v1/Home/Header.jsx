import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-screen bg-[#FBE6CC99] h-max flex flex-col md:flex-row justify-between md:px-[4rem] px-3 py-[80px]">
      <div className="flex-1 mt-[20px]">
        <button className="w-max md:w-[358px] h-[50px] rounded-[8px] border-2 border-[#F9D5AACC] py-[13px] px-[10px] bg-[#F9D5AACC] ml-[90px] md:ml-[160px] mb-[-80px] shadow  ">
          <div className="flex items-center justify-center gap-x-3">
            <span>You can support M4ace</span> <FiArrowRight size={18} />
          </div>
        </button>
        <div className="relative">
          <img
            src="/images/elevate.svg"
            alt="elevate"
            className="absolute top-[-30px] w-[80px] md:w-max"
          />
          <div className="pl-[50px] md:pl-0 md:ml-[100px] mt-[10px] md:mt-[20px]">
            <h2 className="font-[500] text-[30px] md:text-[60px] leading-[48px] md:leading-[84px] text-[#222057] mt-[0px] inline-block">
              Elevate Your Skills, Transform Your Future{" "}
              <Image
                src={"/images/hero-circle.svg"}
                alt="hero circle"
                height={46}
                width={46}
                className="inline-block animate-bounce"
              />
            </h2>
            <p className="font-[500] leading-7 text-[#1E1E1E] text-[18px] mt-[20px] w-full md:w-[443px]">
              Embark on Your Tech Journey: Register for our curated FREE
              training courses and get the right Mentorship, Tools and Content.
            </p>
            <div className="flex mt-[30px] items-center">
              <Link
                href="/registration"
                className=" text-white bg-primary  text-center font-source rounded-lg  hover:animate-pulse ease-out duration-300 h-[50px] w-[150px] flex justify-center items-center"
              >
                Apply Now
              </Link>
              <img
                src="/images/arrow.svg"
                alt="arrow"
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 mt-[30px] md:mt-0">
        <Image
          src={"/images/hero-man.svg"}
          alt="hero man"
          height={445}
          width={342}
          className=""
        ></Image>
        <Image
          src={"/images/hero-girl.svg"}
          alt="hero man"
          height={423}
          width={348}
          className="md:mt-[150px] md:ml-[-40px]"
        ></Image>
      </div>
    </div>
  );
};

export default Header;
