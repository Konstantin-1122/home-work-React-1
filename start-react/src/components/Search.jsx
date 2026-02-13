import { useState } from "react";
import lupa from "../img/logo/POISC.png";

function Search() {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const searchArrEl = ["Stranger Things"];


  const filteredResults =
    text.length >= 3
      ? searchArrEl.filter((work) =>
          work.toLowerCase().startsWith(text.toLowerCase())
        )
      : [];

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setShowInput((prev) => !prev)} style={{backgroundColor: 'transparent'}}>
        <img src={lupa} alt="search" />
      </button>

      {showInput && (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите минимум 3 буквы"
          />
          {text.length >= 3 && filteredResults.length > 0 && (
            <ul
              style={{
                position: "absolute",
                background: "white",
                listStyle: "none",
                padding: "10px",
                margin: 0,
                width: "200px",
              }}
            >
              {filteredResults.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Search;
