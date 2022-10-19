import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Admission from "./pages/Admission";
import Community from "./pages/Community";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admissions-support" element={<Admission />} />
        <Route path="community" element={<Community />} />
        <Route path="explore" element={<Explore />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
