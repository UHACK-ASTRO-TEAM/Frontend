import React from "react";
import Green from "../assets/greenStar.svg";

const Card = () => {
  const card = [{ title: "Lorem" }, { title: "Lorem" }, { title: "Lorem" }];
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="bg-[#FFF9F6] h-[200px] rounded-tr-[100px]"></div>
        <div className="bg-[#FFF9F6] h-[200px] rounded-tl-[100px]"></div>
      </div>

      <div className="bg-[#FFF9F6]">
        <div className="flex justify-center gap-4 font-['inter'] text-sm text-[#0DAC98]">
          <img src={Green} alt="" />
          <p>WHY HEVRINSTITUTION ?</p>
          <img src={Green} alt="" />
        </div>

        <div>
          <h1 className="px-[250px] text-5xl font-semibold text-center">
            Our data is <span className="text-[#FB7C46]">accurate</span> and{" "}
            <span className="text-[#FB7C46]">unique</span>.
          </h1>

          <p className="text-[#4A5168] font-['inter'] text-lg text-center w-[836px] mx-auto">
            To make your search as simple as possible, we provide you with all
            the information, testimonials, and insights in one location.
          </p>
        </div>

        <div className="flex justify-around py-[50px]">
          {card.map((item, i) => (
            <div
              key={i}
              className="h-[200px] w-[200px] bg-white rounded-xl text-center"
            >
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
