import React from "react";
import Orange from "../assets/orangeStar.svg";
import Woman from "../assets/woman.png";
import Img from "../assets/image.png";
import Img1 from "../assets/image1.png";

const StartApplication = (props) => {
  const { head, headline } = props.item;
  return (
    <section className="bg-[#F3F3F3]">
      <div className="mx-[100px]">
        <div className="flex gap-4 font-['inter'] text-[#FB7C46] text-lg">
          <img src={Orange} alt="" />
          <h1>{head}</h1>
          <img src={Orange} alt="" />
        </div>
        <div>
          <p className="text-[#121933]">{headline}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="row-start-1  bg-white row-end-7 h-[416px] rounded-2xl">
            <div>
              <img src={Woman} alt="" />
            </div>

            <div>
              <h1 className="font-semibold text-sm px-2 py-1">
                Start your university application with Hevrinstution
              </h1>
              <p className="text-[#7A7B80] text-xs px-2">
                Learn how to apply to the best schools and universities with the
                aid of Hevrinstution advisers.
              </p>
            </div>
          </div>
          <div className="row-start-1 row-end-3 h-[200px] bg-white rounded-2xl">
            <div className="h-[150px] overflow-hidden">
              <img src={Img} alt="" className="object-cover" />
            </div>

            <div>
              <h1 className="px-2 font-semibold">
                Studying in Nigeria: Western region Vs Eastern region.
              </h1>
            </div>
          </div>
          <div className="h-[200px] bg-white rounded-2xl">
            <div className="h-[150px] overflow-hidden">
              <img src={Img1} alt="" />
            </div>
            <div>
              <h1 className="px-2 font-semibold">
                Studying in Nigeria: Western region Vs Eastern region.
              </h1>
            </div>
          </div>
          <div className="row-start-1 row-end-3 h-[200px] bg-white rounded-2xl">
            <div className="h-[150px] overflow-hidden">
              <img src={Img1} alt="" />
            </div>

            <div>
              <h1 className="px-2 font-semibold">
                Studying in Nigeria: Western region Vs Eastern region.
              </h1>
            </div>
          </div>
          <div className="h-[200px] bg-white rounded-2xl">
            <div className="h-[150px] overflow-hidden">
              <img src={Img1} alt="" />
            </div>

            <div>
              <h1 className="px-2 font-semibold">
                Studying in Nigeria: Western region Vs Eastern region.
              </h1>
            </div>
          </div>
        </div>

        <button className="bg-[#FB7C46] px-9 py-2 rounded-lg text-white">
          Start your application with Hevrinstitution
        </button>
      </div>
    </section>
  );
};

export default StartApplication;
