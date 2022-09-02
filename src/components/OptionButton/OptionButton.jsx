import classNames from "classnames";

import "./OptionButton.css";

const OptionButton = ({ isSelected, image, onClick, children }) => (
  <button
    className={classNames("option-button", {
      selected: isSelected,
    })}
    onClick={onClick}
  >
    <div className="image-wrapper">
      <img src={image} alt="" />
    </div>
    <div className="label-wrapper">{children}</div>
  </button>
);

export default OptionButton;
