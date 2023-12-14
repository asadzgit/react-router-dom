import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    {/* we are doing this for our within-app routes. but for links to external resources, use anchor tag */}
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
