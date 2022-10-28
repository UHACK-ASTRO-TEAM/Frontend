import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StartApplication from "../components/StartApplication";
import axios from "../data/axios";
import Poly from "./Poly";
import Universities from "./Universities";

// const explore_url = "/categories/polytechnic";

const Explore = ({
  poly,
  uni,
  display,
  university,
  btnHandler,
  b1,
  b2,
  btnHandler2,
  active,
}) => {
  return (
    <>
      <Header />

      <section className="bg-[#FFF6F2]">
        <div className="flex justify-between items-center mx-10 pt-8">
          <button
            className="py-2 px-6 text-white bg-[#FB7C46] outline-none border-none rounded-lg"
            onClick={() => btnHandler()}
          >
            universities
          </button>
          <button
            className="py-2 px-6 text-white bg-[#FB7C46] outline-none border-none rounded-lg"
            onClick={() => btnHandler2()}
          >
            polytechnics
          </button>
          <button className="py-2 px-6 text-white bg-[#FB7C46] outline-none border-none rounded-lg">
            monotechnics
          </button>
          <button className="py-2 px-6 text-white bg-[#FB7C46] outline-none border-none rounded-lg">
            Colleges
          </button>
        </div>
        {active === "university" && (
          <Universities uni={uni} university={university} />
        )}
        {active === "poly" && <Poly poly={poly} display={display} />}
      </section>
      {/* <Poly poly={poly} display={display} /> */}
    </>
  );
};

export default Explore;
