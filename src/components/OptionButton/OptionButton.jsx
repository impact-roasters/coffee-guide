import classNames from "classnames";

import "./OptionButton.css";

const OptionButton = ({ isSelected, image, onClick, children }) => (
  <button
    className={classNames("option-button", {
      selected: isSelected,
    })}
    onClick={onClick}
  >
    <img src={image} alt="" />
    {children}
  </button>
);

export default OptionButton;
