import React from "react";
import NETFLIX from "../img/logo/netflix.svg";
import lupa from "../img/logo/POISC.png";
import avatar from "../img/logo/AVATAR.png";

const Header = () => {
   const ulStyle = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
  };

  const left = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const right = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <header>
      <ul style={ulStyle}>
        <li style={left}>
          <a href="#">
            <img src={NETFLIX} alt="NETFLIX" width="156" height="48" />
          </a>
          <a href="#"
           style={{textDecoration: 'none',
            fontSize: '24px', 
            borderLeft: '1px solid rgba(255, 255, 255, 1)',
            paddingLeft: '18px',
            color: 'rgba(200, 200, 200, 1)',
            }}>Friday July 8th</a>
        </li>
       
        <li style={right}>
          <a href="#">
            <img src={lupa} alt="search" />
          </a>
          <a href="#">
            <img src={avatar} alt="avatar" width="74" height="74" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
