// create a componenet that will take back to the questioner page
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Letstry.css";
function Letstry() {
  const onNavigate = useNavigate();

  return (
    <div className="letstry-container">
      <button
        className="letstry-button"
        onClick={() => {
          onNavigate("/");
        }}
      >
        let's try again
      </button>
    </div>
  );
}

export default Letstry;
