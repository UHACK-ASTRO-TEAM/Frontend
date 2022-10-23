import axios from "axios";
import React from "react";
import Header from "../components/Header";
import StartApplication from "../components/StartApplication";

const Explore = () => {
  axios.get(url).then();
  return (
    <>
      <Header />
      <section className="bg-[#FFF6F2]">
        <div className="mx-[100px]">
          <div>
            <h1 className="text-[#121933] text-3xl">
              Institution and Program Search
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Select Location" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Select Location" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Select Location" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Select Location" />
            </div>

            <button className="bg-[#FB7C46]">Refresh</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
