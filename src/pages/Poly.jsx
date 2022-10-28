import React from "react";

const Poly = ({ poly, display }) => {
  const truncate = (str, num) => {
    if (num > str.length) {
      return str;
    }
    return str.slice(0, num) + "...";
  };
  return (
    <div className="mt-10 ">
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
          <div onClick={() => display(id)} key={id}>
            <div className="flex gap-10 bg-white m-10 h-[300px] rounded-lg overflow-hidden">
              <div className="flex flex-col w-fit gap-4 justify-center">
                <div className="h-[200px] w-[400px] overflow-hidden rounded-lg ml-4">
                  <img
                    src={school_image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
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

              <div className="flex flex-col gap-4 my-10">
                <div className="flex gap-4 items-center">
                  <div className="h-[40px] w-[40px] overflow-hidden rounded-lg">
                    <img
                      src={school_logo}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h1 className="font-bold">{name}</h1>
                </div>
                <p className="w-[850px] text-justify text-sm">
                  {truncate(about_school, 800)}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Poly;
