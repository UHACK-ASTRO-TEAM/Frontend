import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "./data/axios";
import Admission from "./pages/Admission";
import Community from "./pages/Community";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import School_Details from "./pages/School_Details";
import Universities from "./pages/Universities";
import Universities_Details from "./pages/Universities_Details";

const explore_url = "/categories/polytechnic";
const Uni_url = "/categories/university/";

function App() {
  const [poly, setPoly] = useState([]);
  const [uni, setUni] = useState([]);

  useEffect(() => {
    axios
      .get(explore_url)
      .then((response) => setPoly(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(Uni_url)
      .then((response) => setUni(response.data))
      .catch((error) => console.log(error));
  }, []);

  // const PolyData = [...new Set(poly.map((item) => item))];
  // const Name = [...new Set(poly.map((item) => item.name))];
  // PolyData.sort();
  // Name.sort();
  // console.log(uni);

  const navigate = useNavigate();
  const [unit, setUnit] = useState([]);
  const [univ, setUniv] = useState([]);
  const [uniList, setUniList] = useState([]);
  const [polyList, setPolyList] = useState([]);
  const [b1, setb1] = useState(false);
  const [b2, setb2] = useState(false);
  const [active, setActive] = useState("poly");

  const display = (school) => {
    const schDE = poly.filter((item) => school === item.id);
    setUnit(schDE);
    navigate("/school-details");
  };

  const university = (school) => {
    const schDE = uni.filter((item) => school === item.id);
    setUniv(schDE);
    navigate("/university-details");
  };

  const btnHandler = (sh) => {
    const UN = uni.map((item) => {
      return item;
    });
    setUniList(UN);
    console.log(UN);
    setb1(true);
    setActive("university");
  };

  const btnHandler2 = (sh) => {
    const pol = poly.map((item) => {
      return item;
    });
    setPolyList(pol);
    console.log(pol);
    setb2(true);
    setActive("poly");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admissions-support" element={<Admission />} />
        <Route path="community" element={<Community />} />
        <Route
          path="explore"
          element={
            <Explore
              poly={poly}
              display={display}
              btnHandler={btnHandler}
              btnHandler2={btnHandler2}
              b1={b1}
              b2={b2}
              active={active}
              uni={uni}
              university={university}
            />
          }
        />
        <Route path="register" element={<Reg />} />
        <Route path="login" element={<Login />} />
        <Route path="school-details" element={<School_Details unit={unit} />} />
        <Route
          path="university-details"
          element={<Universities_Details univ={univ} />}
        />
        <Route path="universities" element={<Universities />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
