import React from "react";
import PatronCard from "./PatronCard";
import Animation from "@/components/common/Animation";

const Patron = () => {
  return (
    <div
      className="w-full md:px-[120px] px-4 py-[50px] md:h-screen"
      id="patrons"
    >
      <div className="">
        <h3 className="font-[700] leading-[42px] text-[30px] text-[#222057] text-center">
          Meet our <span className="text-primary">Patrons</span>
        </h3>
        <p className="font-[400] text-[20px] leading-[30px] text-[#1E1E1E] text-center mt-[10px] mb-[25px]">
          Our Patrons are made up of tech expert from various field
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-y-8 h-full">
        <Animation style="fade-right" placement="center-center">
          <PatronCard
            color={"black"}
            img={"m4ace-patron-jonathan-ayodele.png"}
            name={"Jonathan Ayodele "}
            title={"Cybersecurity Professional"}
            linkedin={"https://linkedin.com/in/jonatayo"}
            x={"https://x.com/Jonat_ayo"}
            facebook={""}
          />
        </Animation>
        <Animation style="fade-right" placement="center-center">
          <PatronCard
            name={"Jude Agboola"}
            img={"marvin.jpeg"}
            title={"Full Stack Software Engineer"}
            linkedin={"https://www.linkedin.com/in/jude-agboola/"}
            x={"https://twitter.com/MarvinJudeHK"}
            facebook={""}
          />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <PatronCard
            color={"white"}
            img={"rotimi.jpeg"}
            name={"Oluwarotimi Owolabi "}
            title={"DevOps at Access Bank Plc"}
            linkedin={"https://www.linkedin.com/in/timibreez/"}
            x={"#"}
            facebook={""}
          />
        </Animation>
        <Animation style="fade-left" placement="center-center">
          <PatronCard
            color={"black"}
            img={"akorede.jpg"}
            name={"Adigun Rasheed "}
            title={"Website Developer"}
            linkedin={"https://www.linkedin.com/in/akotechonline/"}
            x={"#"}
            facebook={""}
          />
        </Animation>
      </div>
    </div>
  );
};

export default Patron;
