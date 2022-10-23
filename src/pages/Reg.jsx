import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/login-logo.svg";
import LoginImg from "../assets/login-img.avif";

import axios from "../data/axios";
import { FaTimes } from "react-icons/fa";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import Explore from "./Explore";

const USER_REGEX = /^[A-z][A-z0-9-_]{2,19}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
const REG_URL = "/register";

const Reg = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [firstname, setFisrtname] = useState("");
  const [fisrtnameIsValid, setFisrtnameIsValid] = useState(false);
  const [fisrtnameFocus, setFisrtnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [lastnameIsValid, setLastnameIsValid] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [inputType, setInputType] = useState("password");

  //   useEffect(() => {
  //     userRef.current.focus();
  //   }, []);

  useEffect(() => {
    const result = USER_REGEX.test(firstname);
    console.log(result);
    console.log(firstname);
    setFisrtnameIsValid(result);
  }, [firstname]);

  useEffect(() => {
    const result = USER_REGEX.test(lastname);
    console.log(result);
    console.log(lastname);
    setLastnameIsValid(result);
  }, [lastname]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setEmailIsValid(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, email, firstname, lastname, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(firstname, lastname, email, pwd, matchPwd);
    // setSuccess(true);
    try {
      const res = await axios.post(
        REG_URL,
        JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          email: email,
          password: pwd,
          password2: matchPwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(res?.data);
      //   console.log(res?.accessToken);
      console.log(JSON.stringify(res.data));
      setSuccess(true);
      setFisrtname("");
      setLastname("");
      setEmail("");
      setPwd("");
      setMatchPwd("");
      setErrMsg("");
    } catch (err) {
      if (!err?.res) {
        console.log();
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Explore />
      ) : (
        <div className="grid grid-cols-2">
          <section className="relative">
            <Link to="/">
              <div className="absolute left-12 top-8">
                <img src={Logo} alt="" />
              </div>
            </Link>
            <div className="overflow-hidden object-cover h-[100vh]">
              <img src={LoginImg} alt="" className="" />
            </div>
            <div className="absolute left-12 bottom-8 text-white">
              <p>Univelcity of Abuja, Abuja</p>
            </div>
          </section>

          <section>
            <ToastContainer />

            <div className="relative">
              <Link to="/">
                <button className="absolute right-11 top-8 bg-gray-400 w-[40px] h-[40px] flex items-center justify-center rounded-full text-gray-200">
                  <FaTimes size={30} />
                </button>
              </Link>
            </div>

            <div className="mt-[100px] px-[50px]">
              <h1 className="text-[#FB7C46] text-4xl">Sign up for free</h1>
              <p className="text-[#666666] py-4">
                Already a member?
                <Link to="/login">
                  <span className="text-[#121933] underline">Login</span>
                </Link>
              </p>
              <div className="border-b-2"></div>
            </div>

            <div className="mt-[20px] px-[50px]">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fisrtname"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setFisrtname(e.target.value)}
                  value={firstname}
                  required
                  placeholder="First Name"
                  onFocus={() => setFisrtnameFocus(true)}
                  onBlur={() => setFisrtnameFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
                />
                <p
                  className={
                    fisrtnameFocus && firstname && !fisrtnameIsValid
                      ? "block"
                      : "hidden"
                  }
                >
                  3 to 20 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <input
                  type="text"
                  id="lastname"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  required
                  placeholder="Last Name"
                  onFocus={() => setLastnameFocus(true)}
                  onBlur={() => setLastnameFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
                />

                <p
                  className={
                    lastnameFocus && lastname && !lastnameIsValid
                      ? "block"
                      : "hidden"
                  }
                >
                  3 to 20 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
                <input
                  type="text"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  placeholder="Email Address"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
                />

                <p
                  className={
                    emailFocus && email && !emailIsValid ? "block" : "hidden"
                  }
                >
                  3 to 20 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>

                <input
                  type={inputType}
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  placeholder="Password"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
                />
                <div className="flex justify-end">
                  {inputType === "password" ? (
                    <AiOutlineEye onClick={() => setInputType("text")} />
                  ) : (
                    <AiFillEye onClick={() => setInputType("password")} />
                  )}
                </div>

                <p className={pwdFocus && !validPwd ? "block" : "hidden"}>
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters: !@#$%
                </p>

                <input
                  type={inputType}
                  id="password2"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  placeholder="Confirm Password"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#FB7C46] block w-full p-2.5 mt-6"
                />

                <p className={matchFocus && !validMatch ? "block" : "hidden"}>
                  Must match the first password input field.
                </p>

                <div className="flex justify-end mt-4">
                  <button
                    disabled={
                      !fisrtnameIsValid ||
                      !lastnameIsValid ||
                      !emailIsValid ||
                      !validPwd ||
                      !validMatch
                        ? true
                        : false
                    }
                    className="py-2 px-8 disabled:bg-[#f8b294] disabled:cursor-not-allowed bg-[#FB7C46] rounded-lg text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Reg;
