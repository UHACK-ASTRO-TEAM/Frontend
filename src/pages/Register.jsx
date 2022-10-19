import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login-img.avif";
import Logo from "../assets/login-logo.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { Axios } from "axios";
import { FaTimes } from "react-icons/fa";

const Register = () => {
  // const [firstName, setFisrtName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password1, setPassword1] = useState("");

  const url = "https://astroteambackend.up.railway.app/register";
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const inputCheck = () => {
    if (
      data.fName === "" ||
      data.lName === "" ||
      data.email === "" ||
      data.pass1 === ""
    ) {
      toast.error("Please fill in all the fields");
      return false;
    }
  };

  const passwordCheck = function () {
    if (data.pass1 !== data.pass2) {
      toast.error("Passwords do not match");
      return false;
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    passwordCheck();
    inputCheck();
    axios
      .post(url, {
        fName: data.fName,
        lName: data.lName,
        email: data.email,
        pass1: data.pass1,
        pass2: data.pass2,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <div className="grid grid-cols-2 relative">
        <div>
          <Link to="/">
            <div className="absolute left-12 top-8">
              <img src={Logo} alt="" />
            </div>
          </Link>
          <div className="overflow-hidden object-cover h-[100vh]">
            <img src={LoginImg} alt="" className="" />
          </div>
        </div>

        <div className="absolute left-12 bottom-8 text-white">
          <p>Univelcity of Abuja, Abuja</p>
        </div>

        <div className="relative">
          <button className="absolute right-11 top-8 bg-gray-400 w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-200">
            <FaTimes size={30} />
          </button>

          <div className="mt-[80px] px-[50px]">
            <h1 className="text-[#FB7C46] text-4xl">Sign up for free</h1>
            <p className="text-[#666666] py-4">
              Already a member?{" "}
              <Link to="/login">
                <span className="text-[#121933] underline">Login</span>
              </Link>
            </p>
            <div className="border-b-2"></div>
          </div>

          <div className="px-[50px] mt-6">
            <ToastContainer />
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                name="fName"
                value={data.firstName}
                placeholder="First Name"
                onChange={(e) => handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <input
                type="text"
                name="lName"
                value={data.lastName}
                placeholder="Last Name"
                onChange={(e) => handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={(e) => handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <input
                type="password"
                name="pass1"
                value={data.password}
                placeholder="Password"
                onChange={(e) => handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <input
                type="password"
                name="pass2"
                value={data.password1}
                placeholder="Password"
                onChange={(e) => handle(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <div className="flex items-center gap-4 py-6 font-['inter']">
                <input
                  type="checkbox"
                  className="accent-orange-700 w-10 h-10"
                />
                <label htmlFor="" className="">
                  I understand that my data will be held for as long as I am
                  registered with the site and I will continue to receive such
                  communications until I amend my user profile.
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-2 px-8 bg-[#FB7C46] rounded-lg text-white"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
