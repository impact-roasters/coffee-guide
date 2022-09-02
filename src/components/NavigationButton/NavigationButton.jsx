import { useNavigate } from "react-router-dom";

import "./NavigationButton.css";

const NavigationButton = ({ children, to }) => {
  const onNavigate = useNavigate();
  return (
    <button
      className="navigation-button"
      onClick={() => {
        onNavigate(to);
      }}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
