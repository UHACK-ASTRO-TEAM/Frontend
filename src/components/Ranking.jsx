import React from "react";
import White from "../assets/whiteStar.svg";

const Ranking = () => {
  return (
    <section className="bg-[#121933]">
      <div className="flex justify-center gap-4 font-['inter'] text-white pt-28">
        <img src={White} alt="" />
        <p>2023 COLLEGE RANKING</p>
        <img src={White} alt="" />
      </div>

      <div className="text-center text-white">
        <h1 className="text-5xl p-6">
          Discover top <span className="text-[#FB7C46]">Institution</span> in{" "}
          <span className="text-[#FB7C46]">Nigeria</span>
        </h1>
        <p className="font-['inter']">
          To create these thorough lists, we combined the data and reviews to
          help you get started.
        </p>

        <button className="bg-[#FB7C46] w-fit mt-[48px] mb-[100px] py-4 px-6 rounded-lg text-sm">
          Explore Hevrinstitution Ranking 2023
        </button>
      </div>

      <div className="grid grid-cols-2">
        <div className="bg-[#F3F3F3] h-[150px] rounded-tr-[100px]"></div>
        <div className="bg-[#F3F3F3] h-[150px] rounded-tl-[100px]"></div>
      </div>
    </section>
  );
};

export default Ranking;
