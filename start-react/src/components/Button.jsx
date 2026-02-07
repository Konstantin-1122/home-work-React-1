import React from "react";
import player from "../img/btn/play.svg" ;
import style from "./myButton.module.css";





const Button = () => {
  return (
    <div className={style.custom}>
         <button className={style.btn_sream}>
        STREAM NOW
        <img src={player} alt="player" />
      </button>
      <button className={style.btn_all}>ALL EPISODES</button>
    </div>
  );
};

export default Button;
