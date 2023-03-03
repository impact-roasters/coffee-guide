import "./Header.css";
import IRLogo from "../../data/images/IRLogo.png";

const Header = () => (
  <header className="app-header">
    <div className="logo">
      <a href="https://impactroasters.dk/">
        <img src={IRLogo} alt="IR Logo" />
      </a>
    </div>
    <div className="language-switcher">
      <select>
        <option value="da">DA</option>
        <option value="en">EN</option>
      </select>
    </div>
  </header>
);

export default Header;
