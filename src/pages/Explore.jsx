import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StartApplication from "../components/StartApplication";
import axios from "../data/axios";

// const explore_url = "/categories/polytechnic";

const Explore = ({ poly, display }) => {
  //   const [poly, setPoly] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(explore_url)
  //       .then((response) => setPoly(response.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  // const PolyData = [...new Set(poly.map((item) => item))];
  // const Name = [...new Set(poly.map((item) => item.name))];
  // PolyData.sort();
  // Name.sort();

  // const navigate = useNavigate();

  // let schDE;
  // const display = (school) => {
  //   schDE = poly.filter((item) => school === item.id);
  //   console.log(schDE);
  //   navigate("/school-details");

  // poly.forEach((element) => console.log(element.id));
  // };
  return (
    <>
      <Header />

      <section className="bg-[#FFF6F2]">
        {poly.map(
          ({
            id,
            school_image,
            school_logo,
            name,
            location,
            about_school,
            brochure,
          }) => (
            <div
              onClick={() => display(id)}
              key={id}
              className="flex items-center gap-4 bg-white m-10 h-[300px] rounded-lg"
            >
              <div className="h-fit w-[400px] overflow-hidden rounded-lg ml-4">
                <img
                  src={school_image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="h-[40px] w-[40px] overflow-hidden ">
                    <img
                      src={school_logo}
                      alt=""
                      className="object-fit- object-contain"
                    />
                  </div>
                  <div>
                    <h1>{name}</h1>
                    <p>{location}</p>
                  </div>
                </div>

                <div>
                  <p>{about_school}</p>
                </div>
                <div>
                  <a href={brochure} download>
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Explore;
