
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";

{
  /*function Home() {
  return (
    <>
      <Header />
      <Genre />
      <Description />
      <Rating />
      <Button />
      <Sliders />
    </>
  );
}*/
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

