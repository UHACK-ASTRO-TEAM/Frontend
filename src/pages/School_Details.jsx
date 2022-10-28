import React from "react";

const School_Details = ({ unit }) => {
  return (
    <div>
      {unit.map((item) => (
        <div key={item.id} className="">
          <h2>{item.name}</h2>
          <p>{item.about_school}</p>
        </div>
      ))}
    </div>
  );
};

export default School_Details;
