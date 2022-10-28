import React from "react";
import Header from "../components/Header";

const School_Details = ({ unit }) => {
  return (
    <div>
      <Header />
      {unit.map(
        ({
          id,
          school_image,
          school_logo,
          name,
          location,
          about_school,
          brochure,
        }) => (
          <div key={id}>
            <div className="grid grid-cols-2">
              <div className="h-[600px] w-[700px] rounded-lg overflow-hidden">
                <img
                  src={school_image}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div>
                <div className="w-[700px] mt-10">
                  <h1 className="font-bold text-6xl">{name}</h1>
                  <h4 className="font-semibold text-2xl">{location}</h4>
                  <p className="text-lg text-justify">{about_school}</p>

                  <div className="ml-4 flex justify-end">
                    <a
                      className="py-2 px-6 text-white bg-[#FB7C46] outline-none border-none rounded-lg"
                      href={brochure}
                      download
                    >
                      DownLoad Brochure
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default School_Details;
