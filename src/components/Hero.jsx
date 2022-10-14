import React from "react";
import Green from "../assets/greenStar.svg";
import { BsSearch } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="h-[79vh] flex flex-col justify-center gap-10">
      <div className="flex justify-center gap-4 font-['inter'] text-sm text-[#0DAC98]">
        <img src={Green} alt="" />
        <p>EXPLORE DIFFERENT INSTITUTION</p>
        <img src={Green} alt="" />
      </div>

      <div>
        <h1 className="px-[250px] text-5xl font-semibold text-center">
          Find the best <span className="text-[#FB7C46]">institution</span> that
          <span className="text-[#FB7C46]"> suits</span> you best.
        </h1>

        <p className="text-[#4A5168] font-['inter'] text-lg text-center w-[836px] mx-auto">
          Finding the right school shouldn’t be hard. From the college of
          education, polytechnic and University, we provide the necessary
          information to ease your decision-making in finding the right school
          for you.
        </p>
      </div>

      <div className="flex justify-center">
        <button className="px-[12px] py-[10px] rounded-lg bg-[#FB7C46] text-white">
          Sign up today!
        </button>
      </div>

      <div className="relative flex items-center w-full ">
        <BsSearch className="absolute pointer-events-none left-[330px] text-[#D8D8D8]" />
        <input
          type="text"
          placeholder="Search for colleges, courses, scholarships, admission support events, and communities"
          className="pl-8 w-[800px] h-14 mx-auto border rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
