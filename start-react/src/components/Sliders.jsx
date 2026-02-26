import React, { useRef } from "react";

import left_btn1 from "../img/btn/left-btn.svg";
import right_btn1 from "../img/btn/right-btn.svg";

import img_carusel1 from "../img/serial/Rectangle 1.png";
import img_carusel2 from "../img/serial/Rectangle 2.png";
import img_carusel3 from "../img/serial/Rectangle 3.png";
import img_carusel4 from "../img/serial/Rectangle 4.png";
import img_carusel5 from "../img/serial/Rectangle 5.png";

import style from "./myButton.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//import "./SliserStyle.css";

import { FreeMode, Pagination } from "swiper/modules";

const Sliders = () => {
  const swiperRef = useRef(null);

  return (
    <div style={{ width: "50%", position: "relative" }}>
      
      {/* Заголовок и кнопки */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "800",
            marginTop: "54px",
            marginBottom: "32px",
            color: "white",
          }}
        >
          POPULAR THIS WEEK
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            position: "absolute",
            top: "16%",
            right: "0%",
          }}
        >
          <button
            className={style.btn_carusel}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={left_btn1} alt="left" />
          </button>

          <button
            className={style.btn_carusel}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={right_btn1} alt="right" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#">
            <img src={img_carusel1} alt="Rectangle1" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src={img_carusel2} alt="Rectangle2" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src={img_carusel3} alt="Rectangle3" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src={img_carusel4} alt="Rectangle4" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="#">
            <img src={img_carusel5} alt="Rectangle5" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
{
  /*import React from "react";
import left_btn1 from "../img/btn/left-btn.svg";
import right_btn1 from "../img/btn//right-btn.svg";
import img_carusel1 from "../img/serial/Rectangle 1.png";
import img_carusel2 from "../img/serial/Rectangle 2.png";
import img_carusel3 from "../img/serial/Rectangle 3.png";
import img_carusel4 from "../img/serial/Rectangle 4.png";
import img_carusel5 from "../img/serial/Rectangle 5.png";
import style from "./myButton.module.css";

const Sliders = () => {
  const carusel_slaider = {
    display: "flex",
    gap: "50px",
  };
  return (
    <div style={{ width: "50%", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "800",
            marginTop: "54px",
            marginBottom: "32px",
            color: 'rgba(255, 255, 255, 1)',
          }}
        >
          POPULAR THIS WEEK
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            position: "absolute",
            top: "16%",
            right: "0%",
          }}
        >
          <button className={style.btn_carusel}>
            <img src={left_btn1} alt="left" />
          </button>
          <button className={style.btn_carusel}>
            <img src={right_btn1} alt="right" />
          </button>
        </div>
      </div>

      <div style={carusel_slaider}>
        <a href="#">
          <img src={img_carusel1} alt="Rectangle1" />
        </a>
        <a href="#">
          <img src={img_carusel2} alt="Rectangle2" />
        </a>
        <a href="#">
          <img src={img_carusel3} alt="Rectangle3" />
        </a>
        <a href="#">
          <img src={img_carusel4} alt="Rectangle4" />
        </a>
        <a href="#">
          <img src={img_carusel5} alt="Rectangle5" />
        </a>
      </div>
    </div>
  );
};

export default Sliders; */
}
