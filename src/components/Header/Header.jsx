import useLocale from "components/App/useLocale";

import IRLogo from "../../data/images/IRLogo.png";
import Danflag from "../../data/images/Danflag.png";
import Engflag from "../../data/images/Engflag.png";

import "./Header.css";

const Header = ({ setLocaleToEnglish, setLocaleToDanish }) => {
  const locale = useLocale();

  console.log(locale);

  return (
    <header className="app-header">
      <div className="logo">
        <a href="https://impactroasters.dk/">
          <img src={IRLogo} alt="IR Logo" />
        </a>
      </div>
      <div className="language-switcher">
        {locale === "en-us" ? (
          <button className="lang-button" onClick={setLocaleToDanish}>
            <img className="flag" src={Danflag} alt="Danish flag" />
          </button>
        ) : (
          <button className="lang-button" onClick={setLocaleToEnglish}>
            <img className="flag-eng" src={Engflag} alt="English flag" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
