import React from "react";
import Orange from "../assets/orangeStar.svg";
const StartApplication = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="mx-[100px]">
        <div className="flex gap-4 font-['inter'] text-[#FB7C46] text-lg">
          <img src={Orange} alt="" />
          <p>START YOUR COLLEGE APPLICATION WITH HEVRINSTITUTION</p>
          <img src={Orange} alt="" />
        </div>
        <p>
          <p className="text-[#121933]">
            Ready to start your university application? Begin your journey with
            Hevrinstitution and receive customised support from our advisers.
          </p>
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="row-start-1  bg-red-600 row-end-7 h-[416px]">1</div>
          <div className="row-start-1 row-end-3 h-[200px] bg-red-600">2</div>
          <div className="h-[200px] bg-red-600">3</div>
          <div className="row-start-1 row-end-3 h-[200px] bg-red-600">4</div>
          <div className="h-[200px] bg-red-600">5</div>
        </div>

        <p>sdgfxchvbjkliubyvtcrxrdfg</p>
      </div>
    </section>
  );
};

export default StartApplication;
