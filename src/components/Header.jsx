import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.png";

const Header = () => {
  // const active = function(){
  //

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
    <header className="p-8 lg:flex lg:items-center lg:justify-between lg:mx-[100px] lg:my-[62px] sticky">
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="lg:hidden flex flex-col space-y-1.5 md:flex-row md:space-x-1.5 md:space-y-0">
          <Link to="/login">
            <button className="bg-[#FB7C460A] py-2.5 px-4 rounded-lg font-semibold">Login</button>
          </Link>
          <Link to="/register">
            <button className="bg-[#FB7C46] py-2.5 px-3.5 rounded-lg font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div>
        <ul className="mt-4 lg:mt-0 md:px-6 flex justify-between lg:space-x-10 lg:items-center ">
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

      <div className="hidden lg:block">
        <Link to="/login"> 
          <button className="bg-[#FB7C460A] py-3 px-4 rounded-lg font-semibold">Login</button>
        </Link>
        <Link to="/register">
          <button className="ml-4 bg-[#FB7C46] py-3 px-4 rounded-lg font-semibold">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
