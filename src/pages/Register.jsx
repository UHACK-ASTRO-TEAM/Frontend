import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../assets/login-img.avif";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const url = "";
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
      toast.error("Fields are empty");
    }
  };

  const passwordCheck = function () {
    if (data.pass1 !== data.pass2) {
      toast.error("Error Notification!");
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    passwordCheck();
    inputCheck();
    if (!toast.error) {
      toast.success("congrats");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="overflow-hidden object-cover h-[100vh]">
            <img src={LoginImg} alt="" className="" />
          </div>
        </div>

        <div>
          <div>
            <button>X</button>
          </div>

          <div className="border-b">
            <h1>Sign up for free</h1>
            <p>
              Already a member?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </p>
          </div>

          <div>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fName"
                value={data.firstName}
                placeholder="First Name"
                onChange={(e) => handle(e)}
              />
              <input
                type="text"
                name="lName"
                value={data.lastName}
                placeholder="Last Name"
                onChange={(e) => handle(e)}
              />
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={(e) => handle(e)}
              />
              <input
                type="password"
                name="pass1"
                value={data.password}
                placeholder="password"
                onChange={(e) => handle(e)}
              />
              <input
                type="password"
                name="pass2"
                value={data.password1}
                placeholder="password"
                onChange={(e) => handle(e)}
              />
              <input type="checkbox" />
              <label htmlFor="">
                I understand that my data will be held for as long as I am
                registered with the site and I will continue to receive such
                communications until I amend my user profile.
              </label>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
