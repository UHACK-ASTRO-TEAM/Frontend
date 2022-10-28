import React from "react";
import Green from "../assets/greenStar.svg";
import Puzzle from "../assets/puzzle.svg";
import Edu from "../assets/Edu.svg";
import Institution from "../assets/institution.svg";
import { Link } from "react-router-dom";

const Card = () => {
  const card = [
    {
      title: "Lorem",
      icon: Puzzle,
      head: "Explore",
      details:
        "By using the right filters, you can find the right course and college.",
      url: "Try our course filter tool ↗",
      path: "/explore",
    },
    {
      title: "Lorem",
      icon: Edu,
      head: "Admission Support",
      details: "We are available to walk you through the application process.",
      url: "Seek advice ↗",
      path: "/admission-support",
    },
    {
      title: "Lorem",
      icon: Institution,
      head: "Community",
      details:
        "You would be able to join study groups and get latest academic news.",
      url: "See more ↗",
      path: "/community",
    },
  ];
  return (
    <section className="mt-4 lg:mt-0">
      <div className="grid grid-cols-2">
        <div className="bg-[#FFF9F6] h-[150px] lg:h-[200px] rounded-tr-[100px]"></div>
        <div className="bg-[#FFF9F6] h-[150px] lg:h-[200px] rounded-tl-[100px]"></div>
      </div>

      <div className="bg-[#FFF9F6]">
        <div className="flex justify-center gap-4 font-['inter'] text-sm text-[#0DAC98] mb-4">
          <img src={Green} alt="" />
          <p>WHY HEVRINSTITUTION ?</p>
          <img src={Green} alt="" />
        </div>

        <div>
          <h1 className="md:px-[100px] lg:px-[250px] text-5xl font-semibold text-center">
            Our data is <span className="text-[#FB7C46]">accurate</span> and{" "}
            <span className="text-[#FB7C46]">unique</span>.
          </h1>

          <p className="text-[#4A5168] font-['inter'] text-lg text-center lg:w-[836px] mx-auto p-4 lg:p-0">
            To make your search as simple as possible, we provide you with all
            the information, testimonials, and insights in one location.
          </p>
        </div>

        <div className="px-12 md:px-6 lg:px-0 flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-4 md:justify-around py-[50px]">
          {card.map((item, i) => (
            <div
              key={i}
              className="h-[200px] md:h-[250px] w-[300px] md:w-[350px] bg-white rounded-xl text-center flex flex-col items-center justify-center"
            >
              <div className="w-fit mx-auto my-4">
                <img src={item.icon} alt="" />
              </div>

              <div>
                <h1 className="text-[#121933] text-xl font-semibold">
                  {item.head}
                </h1>
                <p className="text-[#666666] text-sm font-['inter'] px-6">
                  {item.details}
                </p>
              </div>

              <div className="text-[#666666] text-xs my-2">
                <Link to={item.path}>{item.url}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
