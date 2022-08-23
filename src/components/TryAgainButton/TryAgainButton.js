import { useNavigate } from "react-router-dom";

import "./TryAgainButton.css";

const TryAgainButton = () => {
  const onNavigate = useNavigate();

  return (
    <div className="tryagain-container">
      <button
        className="tryagain-button"
        onClick={() => {
          onNavigate("/");
        }}
      >
        let’s try again
      </button>
    </div>
  );
};

export default TryAgainButton;
