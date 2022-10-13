import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admission from "./pages/Admission";
import Community from "./pages/Community";
import Explore from "./pages/Explore";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="admissions-support" element={<Admission />} />
        <Route path="community" element={<Community />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
