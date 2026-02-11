import React from "react";
import player from "../img/btn/play.svg" ;
import style from "./myButton.module.css";





const Button = () => {
  const btnAlert= ()=>{
  alert('hello');
}
const helloUser = (userName) => {
  alert(`hello ${userName}`);
}
  return (
    <div className={style.custom}>
         <button onClick={btnAlert} className={style.btn_sream}>
        STREAM NOW
        <img src={player} alt="player" />
      </button>
      <button onClick={() => helloUser('user')}
 className={style.btn_all}>ALL EPISODES</button>
    </div>
  );
};

export default Button;
