"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const content = [
  {
    id: 1,
    question: "What is the purpose of the mentoring program?",
    answer:
      "The mentoring program aims to support individuals who are transitioning into the tech industry by providing guidance, resources, and mentorship from experienced professionals in the field.",
  },
  {
    id: 2,
    question: "Who is eligible to participate in the mentoring program?",
    answer:
      "The mentoring program is open to individuals from diverse backgrounds who are looking to make a career transition into the tech industry. Whether you're a recent graduate, a professional from another field, or someone exploring new career paths, you're welcome to join the program.",
  },
  {
    id: 3,
    question: "What are the benefits of joining the mentoring program?",
    answer:
      "By participating in the mentoring program, you will have the opportunity to receive personalized guidance and support from experienced mentors who can offer insights into various tech career paths, help you set achievable goals, provide feedback on your progress, and connect you with valuable resources and networking opportunities within the tech industry.",
  },
  {
    id: 4,
    question:
      "What types of support and resources are available through the mentoring program?",
    answer:
      "In addition to one-on-one mentorship, the program offers access to workshops, networking events, industry insights, career development resources, and opportunities to collaborate on projects or participate in hackathons and coding challenges.",
  },
  {
    id: 5,
    question: "How can I apply to join the mentoring program?",
    answer:
      "To apply for the mentoring program, simply fill out the online application form available on our website. Be sure to provide information about your background, career goals, areas of interest in the tech industry, and any specific preferences you may have regarding mentorship.",
  },
  {
    id: 5,
    question:
      " Is there any cost associated with participating in the mentoring program?",
    answer:
      "The mentoring program is typically offered free of charge to participants.",
  },
];
const Item = ({ title, handleOpen, opened, content }) => {
  return (
    <div className="p-5 bg-cream mt-[10px]" onClick={handleOpen}>
      <div className="flex justify-between items-center w-full">
        <p className="font-[500] text-[20px] leading-[30px] text-[#222057] w-4/5">
          {title}
        </p>
        <IoMdAdd size={37} />
      </div>
      {opened && (
        <div className="mt-3">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
const FAQ = () => {
  const [openItems, setOpenItems] = useState(Array(content.length).fill(false));

  const handleOpen = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center justify-center py-[30px]"
    >
      <div className="px-3 w-full md:w-1/2">
        <p className="font-[400] text-[20px] leading-[30px] text-[#1E1E1E] text-center my-[10px]">
          Got Some Questions?
        </p>
        <h3 className="font-[700] leading-[42px] text-[30px] text-[#222057] text-center">
          Frequently Asked <span className="text-primary">Question</span>
        </h3>
        <div className="mt-[20px]">
          {content.map((item, index) => {
            return (
              <div className="" key={item.id}>
                <Item
                  title={item.question}
                  handleOpen={() => handleOpen(index)}
                  opened={openItems[index]}
                  content={item.answer}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
