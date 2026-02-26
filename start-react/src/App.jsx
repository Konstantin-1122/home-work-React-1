
import Footer from "./components/Footer";
import Header from "./components/Header";
import Genre from "./components/Genre";
import Description from "./components/Description";
import Button from "./components/Button";
import Sliders from "./components/Sliders";
import Rating from "./components/Rating";



//import React from "react";
//import Footer from "./Footer";
//import Header from "./Header";
//import Genre from "./Genre";
//import Description from "./Description";
//import Button from "./Button";
//import Sliders from "./Sliders";
//import Rating from "./Rating";

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
 <>
   <Home></Home> 
    {/*<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>

         
        <div className="container">
      <div className="small-wrapper">
        <Header />
        <Genre />
        <Description />
        <Rating />
        <Button />
        <Sliders />
      </div>
      <Footer />
    </div>*/}
    </>
  );
}

export default App;

// я не знаю где ошибка, вроде сделал все правельно Router, подскажите пожалуста  где я допустил ошибку???