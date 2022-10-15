import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admission from "./pages/Admission";
import Community from "./pages/Community";
import Explore from "./pages/Explore";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admissions-support" element={<Admission />} />
        <Route path="community" element={<Community />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
