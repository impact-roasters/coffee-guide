import useLocale from "components/App/useLocale";

import IRLogo from "../../data/images/IRLogo.png";

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
          <button
            aria-label="Dansk"
            className="lang-button"
            onClick={setLocaleToDanish}
          >
            🇩🇰
          </button>
        ) : (
          <button
            aria-label="English"
            className="lang-button"
            onClick={setLocaleToEnglish}
          >
            🇬🇧
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
