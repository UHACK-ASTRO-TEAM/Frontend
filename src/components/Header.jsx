import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.png";

const Header = () => {
  const navigation = [
    {
      label: "Explore",
      path: "/explore",
    },
    {
      label: "Admissions support",
      path: "/admissions-support",
    },
    {
      label: "Community",
      path: "/community",
    },
  ];
  return (
    <header className="flex items-center justify-between mx-[100px] my-[62px]">
      <div className="cursor-pointer">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div>
        <ul className="flex items-center justify-between gap-5">
          {navigation.map((item, i) => (
            <Link key={i} to={item.path}>
              <li
                className={`cursor-pointer hover:border-b-2 border-b-[#FB7C46]`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <button className="bg-[#FB7C460A] py-3 px-4 rounded-lg">Login</button>
        <button className="ml-4 bg-[#FB7C46] py-3 px-4 rounded-lg ">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
