import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login-img.avif";
import Logo from "../assets/login-logo.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import axios from "../data/axios";

const LOG_URL = "/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 relative">
        <div className="hidden md:block">
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

        <div>
          <div className="relative">
            <Link to="/">
              <button className="absolute right-11 top-8 bg-gray-400 w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-200">
                <FaTimes size={30} />
              </button>
            </Link>
          </div>

          <div className="mt-[80px] px-[50px]">
            <h1 className="text-[#FB7C46] text-4xl">Welcome back</h1>
            <p className="text-[#666666] py-4">
              Not registered?{" "}
              <Link to="/register">
                <span className="text-[#121933] underline">Register</span>
              </Link>
            </p>
            <div className="border-b-2"></div>
          </div>

          <div className="px-[50px] mt-6">
            <ToastContainer />
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
              />

              <div className="flex justify-end py-4">
                <button
                  type="submit"
                  className="py-2 px-8 bg-[#FB7C46] rounded-lg text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
