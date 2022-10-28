import React from "react";
import Header from "../components/Header";
import StartApplication from "../components/StartApplication";
import axios from "../data/axios";

const explore_url = "/categories/polytechnic";

console.log(axios.get(explore_url).then((res) => res.data));
const Explore = () => {
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

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
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

            <div>
            <button className="bg-[#FB7C46]">Refresh</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
