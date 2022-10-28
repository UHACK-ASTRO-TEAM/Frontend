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

const explore_url = "/categories/polytechnic";

function App() {
  const [poly, setPoly] = useState([]);

  useEffect(() => {
    axios
      .get(explore_url)
      .then((response) => setPoly(response.data))
      .catch((error) => console.log(error));
  }, []);

  // const PolyData = [...new Set(poly.map((item) => item))];
  // const Name = [...new Set(poly.map((item) => item.name))];
  // PolyData.sort();
  // Name.sort();

  const navigate = useNavigate();
  const [unit, setUnit] = useState([]);

  const display = (school) => {
    const schDE = poly.filter((item) => school === item.id);
    setUnit(schDE);
    navigate("/school-details");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admissions-support" element={<Admission />} />
        <Route path="community" element={<Community />} />
        <Route
          path="explore"
          element={<Explore poly={poly} display={display} />}
        />
        <Route path="register" element={<Reg />} />
        <Route path="login" element={<Login />} />
        <Route path="school-details" element={<School_Details unit={unit} />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
