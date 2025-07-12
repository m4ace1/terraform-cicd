import Animation from "@/components/common/Animation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#F1F0FF] pt-[30px] pb-[30px] md:pb-0 px-6 md:px-[120px] flex flex-col-reverse md:flex-row md:justify-between items-center md:items-stretch">
      <Animation style="fade-left" placement="center-center">
        <div className="flex items-start">
          <Image
            src={"/images/starblue.png"}
            alt="star"
            width={34}
            height={40}
            className="hidden md:block animate-pulse"
          />
          <div className="border-2 border-primary py-[10px] px-[24px] rounded-[24px] w-[303px] mt-[50px]">
            <h3 className="font-[500] text-[24px] leading-[33.6px] text-[#222057]">
              Our Vision
            </h3>
            <p className="font-[400] text-[16px] leading-[24px] text-black">
              We envision a future where every aspiring tech professional is
              equipped with the knowledge, skills, and confidence to thrive in
              the dynamic landscape of technology.
            </p>
          </div>
        </div>
      </Animation>
      {/* <Animation
        className="flex items-end"
        style="fade-top"
        placement="center-center"
      > */}
      <div className="md:flex items-end mb-[50px] hidden">
        <Image
          src={"/images/starpurple.png"}
          alt="star"
          width={34}
          height={40}
          className=" animate-pulse"
        />
      </div>
      {/* </Animation> */}
      <Animation style="fade-right" placement="center-center">
        <div className="flex items-start">
          <div className="border-2 border-primary py-[10px] px-[24px] rounded-[24px] w-[303px] mt-[50px]">
            <h3 className="font-[500] text-[24px] leading-[33.6px] text-[#222057]">
              Our MIssion
            </h3>
            <p className="font-[400] text-[16px] leading-[24px] text-black">
              Our mission is to empower aspiring tech professionals by providing
              mentorship and guidance to kickstart their careers in the dynamic
              world of technology.
            </p>
          </div>
          <Image
            src={"/images/starblue.png"}
            alt="star"
            width={34}
            height={40}
            className="hidden md:block animate-pulse"
          />
        </div>
      </Animation>
      <Animation style="fade-left" placement="center-center">
        <div className="flex flex-col md:mt-[50px]">
          <h1 className="font-[700] text-[30px] leading-[42px] text-[#222057] text-center">
            What keeps us <span className="text-primary">going</span>
          </h1>
          <Image
            src={"/images/angle.svg"}
            alt="star"
            width={34}
            height={40}
            className="w-4/5 md:w-[461.7px] h-[270px] md:ml-[-50px] hidden md:block"
          />
        </div>
      </Animation>
    </div>
  );
};

export default About;
