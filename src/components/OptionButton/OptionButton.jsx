import classNames from "classnames";

import "./OptionButton.css";

const OptionButton = ({ label, isSelected, image, onClick }) => (
  <button
    className={classNames("option-button", {
      selected: isSelected,
    })}
    onClick={onClick}
  >
    <img src={image} alt="" />
    {label}
  </button>
);

export default OptionButton;
