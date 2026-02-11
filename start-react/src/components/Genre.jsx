import React from "react";

const Genre = () => {
  const genreSpan = {
    display: "inline-block",
    padding: "1px 18px",
    borderLeft: "3px solid white",
  };
  const genreSpan1 = {
    display: "inline-block",
    borderLeft: "none",
    paddingLeft: "0px",
    padding: "1px 18px",
  };
  let genre = ["Drama", "Thriller", "Supernatural"];
  let genreEl = genre.map((item, index) => {
    return (
      <span style={genreSpan} key={index}>
        {item}
      </span>
    );
  });

  return (
    <div
      className="genderContainer"
      style={{
        display: "flex",
        color: "white",
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "39px",
        textAlign: "left",
        marginTop: "115px",
        marginBottom: "65px",
      }}
    >
      {genreEl}
    </div>
  );
};

export default Genre;
