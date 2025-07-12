import Animation from "@/components/common/Animation";
import Image from "next/image";
import React from "react";

const Card = ({ icon, title, content }) => {
  return (
    <div id="about" className="w-[287px]">
      <Image
        src={`/images/icons/${icon}.svg`}
        alt={title}
        height={56}
        width={56}
      />
      <h4 className="my-[10px] font-[500] text-[20px] leading-[30px] text-[#222057]">
        {title}
      </h4>
      <p className="font-[300] text-[15px] leading-[22px] text-black">
        {content}
      </p>
    </div>
  );
};
const Info = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-[3rem] items-center px-3 md:pl-[164px] md:pr-[110px] py-[30px] w-screen">
      <div className="">
        <h3 className="font-[700] leading-[42px] text-[30px] text-[#222057]">
          What you stand to <span className="text-primary">gain</span>
        </h3>
        <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E] my-[20px]">
          We are providing training to more than 5,000 African youths in diverse
          areas such as Engineering, Content Creation, Product Development, and
          Design.
        </p>
        <Image
          src={"images/experience.svg"}
          alt="experience"
          height={278}
          width={376}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[60px]">
        <Animation style="fade-right" placement="center-center">
          <Card
            icon={"cert"}
            title={"Earn a certificate"}
            content={
              "all Internship finalists will be awarded a paid certificate of completion at the end of the Internship."
            }
          />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <Card
            icon={"learn"}
            title={"Learn from the very best"}
            content={
              "Learning is a wonderful experience, and learning from the best makes everything ten times easier. The Internship mentors and lead instructors are all here to make your Internship experience unforgettable."
            }
          />
        </Animation>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-[60px]">
        <Animation style="fade-right" placement="center-center">
          <Card
            icon={"experience"}
            title={"Get hands-on experience"}
            content={
              "During the Internship, you will be assigned projects and team assignments that will give you the needed experience, and help you build your portfolio, teamwork, and communication skills."
            }
          />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <Card
            icon={"startup"}
            title={"join a fast-growing startup"}
            content={
              "During the bootcamp, all Internship finalists will have the opportunity to build a fast-paced start-up."
            }
          />
        </Animation>
      </div>
    </div>
  );
};

export default Info;
