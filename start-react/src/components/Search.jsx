import { useEffect, useState } from "react";
import lupa from "../img/logo/POISC.png";

function Search() {
  const [showInput, setShowInput] = useState(false);       
  const [text, setText] = useState("");                   
  const [filteredResults, setFilteredResults] = useState([]); 
  const [list, setList] = useState(false);                
  const [selectedFilm, setSelectedFilm] = useState(null); 

  const searchArrEl = [
    "Stranger Things",
    "Побег из Шоушенка",
    "Крестный отец",
    "Темный рыцарь",
    "Зеленая миля",
    "Форрест Гамп",
  ];


  useEffect(() => {
    console.log(showInput ? "Поле поиска открыто" : "Поле поиска закрыто");
  }, [showInput]);


  useEffect(() => {
    if (text.length >= 2) {
      const filtered = searchArrEl.filter((film) =>
        film.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredResults(filtered);
      setList(true); 
    } else {
      setFilteredResults([]);
      setList(false); 
    }
  }, [text]);


  useEffect(() => {
    if (selectedFilm) {
      setText(selectedFilm);
      setList(false);       
    }
  }, [selectedFilm]);

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>
    
      <button
        onClick={() => setShowInput(prev => !prev)}
        style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
      >
        <img src={lupa} alt="search" />
      </button>

      
      {showInput && (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите минимум 2 буквы"
          />

         
          {list && filteredResults.length > 0 && (
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
              }}
            >
              {filteredResults.map((film, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedFilm(film)} 
                  style={{ padding: "5px 0", cursor: "pointer" }}
                >
                  {film}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
// я не знаю как выполнить дз, я не понял что надо сделать 
