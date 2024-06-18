import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import PostDetails from "./Pages/PostDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
