import React from "react";
import "./TextStyle.css";

const Description = () => {
  let title = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "50px",
  };
  return (
    <div>
      <h1>Stranger Things</h1>

      <div style={title}>
        <div style={{ padding: "0 20px" }}>
          <h4>2019</h4>
        </div>

        <div
          style={{
            borderLeft: "2px solid rgba(255, 255, 255, 1)",
            padding: "0 20px",
          }}
        >
          <h4>
            DIRECTOR: <span>Shawn Levy</span>
          </h4>
        </div>

        <div
          style={{
            borderLeft: "2px solid rgba(255, 255, 255, 1)",
            padding: "0 20px",
          }}
        >
          <h4>
            seasons: <span>3 (5 Episodes)</span>
          </h4>
        </div>
      </div>
      <div style={{ width: "864px", height: "130px" }}>
        <p
          style={{
            fontSize: "24px",
            color: "rgba(167, 166, 166, 1)",
            fontWeight: "400",
          }}
        >
          In 1980s Indiana, a group of young friends witness supernatural forces
          and secret government exploits. As they search for answers, the
          children unravel a series of extraordinary mysteries
        </p>
      </div>
    </div>
  );
};

export default Description;
