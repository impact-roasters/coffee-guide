import { createContext, useContext, useState } from "react";

const LocaleContext = createContext("en-us");

const useLocaleState = () => {
  const [locale, setLocale] = useState("en-us");

  const setLocaleToEnglish = () => {
    setLocale("en-us");
  };

  const setLocaleToDanish = () => {
    setLocale("da-dk");
  };

  return { locale, setLocaleToEnglish, setLocaleToDanish };
};

const useLocale = () => {
  const locale = useContext(LocaleContext);
  return locale;
};

export default useLocale;

export { LocaleContext, useLocaleState };
