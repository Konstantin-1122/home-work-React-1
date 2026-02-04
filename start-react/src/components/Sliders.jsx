import React from "react";

const Sliders = () => {
  return (
    <div>
      <div>
        <div className="">POPULAR THIS WEEK</div>
        <div className="scroll_btn">
          <button className="left_btn"><img src="../img/btn/left-btn.svg" alt="left" /></button>
          <button className="right_btn"><img src="../img/btn//right-btn.svg" alt="right" /></button>
        </div>
      </div>
      <div className="scroll_series">
        <a href="#">
          <img src="../img/serial/Rectangle 1.png" alt="Rectangle" />
        </a>
        <a href="#">
          <img src="../img/serial/Rectangle 2.png" alt="Rectangle" />
        </a>
        <a href="#">
          <img src="../img/serial/Rectangle 3.png" alt="Rectangle" />
        </a>
        <a href="#">
          <img src="../img/serial/Rectangle 4.png" alt="Rectangle" />
        </a>
        <a href="#">
          <img src="../img/serial/Rectangle 5.png" alt="Rectangle" />
        </a>
      </div>
    </div>
  );
};

export default Sliders;
