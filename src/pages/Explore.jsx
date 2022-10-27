import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import StartApplication from "../components/StartApplication";
import axios from "../data/axios";

const explore_url = "/categories/polytechnic";

const Explore = () => {
  const [poly, setPoly] = useState([]);
  useEffect(() => {
    axios
      .get(explore_url)
      .then((response) => setPoly(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(poly);

  // const PolyData = [...new Set(poly.map((item) => item))];
  // const Name = [...new Set(poly.map((item) => item.name))];
  // PolyData.sort();
  // Name.sort();

  return (
    <>
      <Header />

      <section className="bg-[#FFF6F2]">
        {poly.map((item, i) => (
          <div key={i} className="flex gap-4 bg-white m-10">
            <div className="h-fit w-[400px]">
              <img
                src={item.school_image}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="h-[40px] w-[40px] overflow-hidden ">
                  <img
                    src={item.school_logo}
                    alt=""
                    className="object-fit- object-contain"
                  />
                </div>
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.location}</p>
                </div>
              </div>

              <div>
                <p>{item.about_school}</p>
              </div>
              <div>
                <a href={item.brochure} download>
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Explore;
