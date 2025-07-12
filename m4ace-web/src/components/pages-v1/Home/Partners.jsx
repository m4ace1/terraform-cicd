import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="py-[30px] px-6 md:px-[120px]">
      <h3 className="text-[30px] font-[700] leading-[42px] text-[#222057] text-center">
        Our Partners and Sponsors
      </h3>
      <div className="mt-[20px] flex gap-x-[2rem] justify-center items-center ">
        <a
          href="https://play.google.com/store/apps/details?id=mypayconnect.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/images/partners/payconnect.png"}
            alt="mypayconnect"
            height={70}
            width={233}
          />
        </a>
        <Image
          src={"/images/partners/jobberman.png"}
          alt="mypayconnect"
          height={70}
          width={233}
        />
      </div>
    </div>
  );
};

export default Partners;
