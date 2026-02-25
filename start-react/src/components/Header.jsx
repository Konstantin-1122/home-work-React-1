import React, { useState, useEffect } from "react";
import NETFLIX from "../img/logo/netflix.svg";
import HeaderNav from "./HeaderNav";
//import Search from "./search";
import lupa from "../img/logo/POISC.png";
import { Link } from 'react-router-dom';

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
    position: "relative",
  };

  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const films = [
    "Stranger Things",
    "Побег из Шоушенка",
    "Крестный отец",
    "Темный рыцарь",
    "Зеленая миля",
    "Форрест Гамп",
  ];

  
  useEffect(() => {
    if (!showInput) {
      setText("");
      setFilteredResults([]);
    }
  }, [showInput]);

  useEffect(() => {
    if (text.length >= 3) {
      setFilteredResults(
        films.filter((film) =>
          film.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredResults([]);
    }
  }, [text]);

 
  const handleSelectFilm = (film) => {
    setText(film);
    setFilteredResults([]);
  };

  return (
    <header>
      <ul style={ulStyle}>
      
        <li style={left}>
          <a >
            <img src={NETFLIX} alt="NETFLIX" width="156" height="48" />
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              borderLeft: "1px solid rgba(255, 255, 255, 1)",
              paddingLeft: "18px",
              color: "rgba(200, 200, 200, 1)",
            }}
          >
            Friday July 8th
          </a>
        </li>
        
       {/* <div className="headermiddle" style={{display:'flex', alignItems:'center',gap:'8px'}}>
     <Link className="me-3 py-2 link-body-emphasis text-white text-decoration-none" to='/about'>About</Link>
     <Link className="me-3 py-2 link-body-emphasis text-white text-decoration-none" to='/price'>Price</Link>
     <Link className="me-3 py-2 link-body-emphasis text-white text-decoration-none" to='/contact'>Contact</Link>
        </div>*/}


     
        <li style={right}>
          <div>
          
            <button
              onClick={() => setShowInput((prev) => !prev)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img src={lupa} alt="search" />
            </button>

            
            {showInput && (
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Поиск фильма..."
                style={{ padding: "5px", marginLeft: "10px" }}
              />
            )}

         
            {filteredResults.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "35px",
                  left: 0,
                  background: "white",
                  listStyle: "none",
                  padding: "10px",
                  margin: 0,
                  width: "200px",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                  zIndex: 1000,
                }}
              >
                {filteredResults.map((film) => (
                  <li
                    key={film}
                    style={{ padding: "5px 0", cursor: "pointer" }}
                    onClick={() => handleSelectFilm(film)}
                  >
                    {film}
                  </li>
                ))}
              </ul>
            )}
          </div>

          
          <HeaderNav isLogin={false} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
