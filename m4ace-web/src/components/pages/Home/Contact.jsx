"use client";
import Animation from "@/components/common/Animation";
import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);
  const handleSendMail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const result = await response.json();
    console.log(result);
    if (result) {
      setSendMessage(true);
      setEmailSentMessage(result.message);
      setTimeout(() => {
        setSendMessage(false);
      }, 4000);
    }
  };
  return (
    <section className="bg-[#FDF0E0] px-4 md:px-[240px] py-[40px] flex flex-col md:flex-row md:justify-between gap-x-[50px]">
      <Animation style="fade-right" placement="center-center">
        <div className="w-full md:w-[390px]">
          <h1 className="font-[700] text-[24px] md:text-[30px] leading-[42px] text-[#222057] text-center mb-4">
            You want to <span className="text-primary">Converse?</span>
          </h1>
          <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
            If you wish to make inquiries or contact us, please use the provided
            form. We guarantee a response within 12 hours or less
          </p>
          {/* <div className="mt-[20px] flex flex-col md:flex-row justify-center md:justify-start items-center gap-x-3">
            <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
              +234-908-989-3934
            </p>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary/85"></span>
            </span>
            <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
              team@m4ace.com
            </p>
          </div> */}
          <div className="mt-[20px] ">
            <div className="flex gap-[15px]">
              <Image
                src={"/images/icons/call.svg"}
                alt="star"
                width={64}
                height={64}
              />
              <div className="">
                <h4 className="font-[500] text-[20px] leading-[30px] text-[#1e1e1e]">
                  Contact Number
                </h4>
                <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
                  <a href="tel:+234813160982">+234-908-989-3934</a>
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] mt-[20px]">
              <Image
                src={"/images/icons/email.svg"}
                alt="star"
                width={64}
                height={64}
              />
              <div className="">
                <h4 className="font-[500] text-[20px] leading-[30px] text-[#1e1e1e]">
                  Our Email
                </h4>
                <p className="font-[400] text-[18px] leading-[27px] text-[#1E1E1E]">
                  <a href="mailto:team@m4ace.com">team@m4ace.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start mt-[20px]">
            <Image
              src={"/images/starpurple.png"}
              alt="star"
              width={34}
              height={40}
              className=" animate-pulse"
            />
          </div>
          <div className="hidden md:flex justify-start items-end mt-[100px]">
            <Image
              src={"/images/circle-contact.svg"}
              alt="star"
              width={89}
              height={78}
              className=" animate-bounce"
            />
          </div>
        </div>
      </Animation>
      <Animation style="fade-left" placement="center-center">
        <div className="w-full md:w-[350px]">
          <form onSubmit={handleSendMail}>
            <div className="">
              <label
                htmlFor="email"
                className="font-[500] text-[12px] leading-[20px] text-[#222057] mb-2 block"
              >
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                className="w-full h-[56px] rounded-[4px] py-[14px] px-[16px] border-none bg-white"
                id="email"
                placeholder="Johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="name"
                className="font-[500] text-[12px] leading-[20px] text-[#222057] mb-2 block"
              >
                Your Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                className="w-full h-[56px] rounded-[4px] py-[14px] px-[16px] border-none bg-white"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="message"
                className="font-[500] text-[12px] leading-[20px] text-[#222057] mb-2 block"
              >
                Message <span className="text-red-700">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="w-full h-[116px] rounded-[4px] py-[14px] px-[16px] border-none bg-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-[358px] h-[50px] rounded-[8px] border border-[#EC8000] py-[13px] px-[10px] bg-[#F9D5AACC] mt-3 shadow  "
            >
              <div className="flex items-center justify-center gap-x-3">
                <span>Sign up</span> <FiArrowRight size={18} />
              </div>
            </button>
          </form>
        </div>
      </Animation>
      {sendMessage && (
        <div className="absolute px-8 py-2 rounded-md bg-primary top-0 right-0">
          <p className="text-white">{emailSentMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
