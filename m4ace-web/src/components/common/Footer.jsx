import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222057] text-white py-[60px] px-6 md:pl-[120px] md:pr-[80px]">
      <section className="grid grid-cols-1 md:grid-cols-4 justify-between w-full">
        <div className="flex flex-col justify-center items-center md:items-start mb-[30px] md:mb-0">
          <div className="">
            <img src="/images/logo-footer.svg" alt="m4ace logo footer" />
          </div>
          <div className="">
            <p className="text-[16px] leading-[24px] mt-[8px] font-[400] text-center md:text-left">
              team@m4ace.com
            </p>
            <p className="text-[16px] leading-[24px] font-[400] my-[5px] text-center md:text-left">
              +234-908-989-3934
            </p>
            <p className="text-[16px] leading-[24px] font-[400] md:w-[220px] text-center md:text-left">
              +234-813-160-9892
            </p>
            {/* <div className="flex items-center gap-x-4 mt-[10px]">
              <Image
                src={"/images/icons/facebook.svg"}
                alt="facebook icon"
                width={36}
                height={36}
              />
              <Image
                src={"/images/icons/x.svg"}
                alt="x icon"
                width={36}
                height={36}
              />
              <Image
                src={"/images/icons/instagram.svg"}
                alt="instagram icon"
                width={36}
                height={36}
              />
              <Image
                src={"/images/icons/linkedin.svg"}
                alt="linkedin icon"
                width={36}
                height={36}
              />
            </div> */}
          </div>
        </div>
        {/* <div className="text-center md:text-left mb-[30px] md:mb-0">
          <h1 className="text-[20px] font-[500] leading-[30px]">Our Mission</h1>
          <p className="text-[16px] leading-[24px] font-[400] mt-[15px] md:w-[220px] text-center md:text-left">
            Our goal is to empower aspiring tech professionals with cutting-edge
            skills and knowledge, paving the way for limitless success in the
            digital age.
          </p>
        </div> */}
        <div className="text-center md:text-left mb-[30px] md:mb-0">
          <h1 className="text-[20px] font-[500] leading-[30px]">
            Our Policies
          </h1>
          <ul className="text-center  md:text-left">
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Terms of Use
            </li>
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-[30px] md:mb-0">
          <h1 className="text-[20px] font-[500] leading-[30px]">Our Program</h1>
          <ul className="text-center  md:text-left">
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Software Development
            </li>
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Cloud Computing
            </li>
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Brand Identity Design
            </li>
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Product Design
            </li>
            <li className="text-[16px] leading-[24px] font-[400] mt-[15px]">
              Cybersecurity
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-[30px] md:mb-0">
          <h1 className="text-[20px] font-[500] leading-[30px]">Follow Us</h1>
          <div className="flex items-start justify-center md:justify-start gap-x-4 mt-[10px]">
            <a
              href="https://www.facebook.com/profile.php?id=61556392947446"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/icons/facebook.svg"}
                alt="facebook icon"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://x.com/for_M4ACE?t=AJMpay5nXUdz0RTLCyBsaA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/icons/x.svg"}
                alt="x icon"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?i=1j5diui82hbkl&utm_content=tlju64i"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/images/icons/instagram.svg"}
                alt="instagram icon"
                width={36}
                height={36}
              />
            </a>
            <Image
              src={"/images/icons/linkedin.svg"}
              alt="linkedin icon"
              width={36}
              height={36}
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-[30px]">
        <p className="text-[16px] leading-[24px] font-[400] mt-[15px] text-center">
          Copyright © Mentorship For Acceleration {new Date().getFullYear()} All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
