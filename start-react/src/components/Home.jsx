
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Genre from "./Genre";
import Description from "./Description";
import Button from "./Button";
import Sliders from "./Sliders";
import Rating from "./Rating";

function Home() {
  return (
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
    </div>
  );
}

export default Home;
