import { useState, useEffect, useCallback } from "react";

const useAnswers = () => {
  const [profile, onSetProfile] = useState(
    localStorage.getItem("profile") ?? null
  );
  const [acidity, onSetAcidity] = useState(
    localStorage.getItem("acidity") ?? null
  );
  const [characteristics, onSetCharacteristics] = useState(
    JSON.parse(localStorage.getItem("characteristics")) ?? []
  );
  const [roastLevel, onSetRoastLevel] = useState(
    localStorage.getItem("roastLevel") ?? null
  );

  useEffect(() => {
    if (profile !== null) {
      localStorage.setItem("profile", profile);
    }
  }, [profile]);

  useEffect(() => {
    if (acidity !== null) {
      localStorage.setItem("acidity", acidity);
    }
  }, [acidity]);

  useEffect(() => {
    localStorage.setItem("characteristics", JSON.stringify(characteristics));
  }, [characteristics]);

  const onToggleCharacteristic = useCallback(
    (characteristic) => {
      if (["skip", "all"].includes(characteristic)) {
        onSetCharacteristics([characteristic]);
      } else if (characteristics.includes(characteristic)) {
        onSetCharacteristics(
          characteristics.filter(
            (filteredCharacteristic) =>
              filteredCharacteristic !== characteristic
          )
        );
      } else {
        onSetCharacteristics([
          ...characteristics.filter(
            (filteredCharacteristic) =>
              !["skip", "all"].includes(filteredCharacteristic)
          ),
          characteristic,
        ]);
      }
    },
    [characteristics]
  );

  useEffect(() => {
    if (roastLevel !== null) {
      localStorage.setItem("roastLevel", roastLevel);
    }
  }, [roastLevel]);

  return {
    profile,
    acidity,
    characteristics,
    roastLevel,
    onSetProfile,
    onSetAcidity,
    onToggleCharacteristic,
    onSetRoastLevel,
  };
};

export default useAnswers;
