import { useState, useEffect, useCallback } from "react";

const useAnswers = () => {
  const [coffeeProfile, onSetCoffeeProfile] = useState(
    localStorage.getItem("coffeeProfile") ?? null
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
    if (coffeeProfile !== null) {
      localStorage.setItem("coffeeProfile", coffeeProfile);
    }
  }, [coffeeProfile]);

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
      if (characteristics.includes(characteristic)) {
        onSetCharacteristics(
          characteristics.filter(
            (filteredCharacteristic) =>
              filteredCharacteristic !== characteristic
          )
        );
      } else {
        onSetCharacteristics([...characteristics, characteristic]);
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
    coffeeProfile,
    acidity,
    characteristics,
    roastLevel,
    onSetCoffeeProfile,
    onSetAcidity,
    onToggleCharacteristic,
    onSetRoastLevel,
  };
};

export default useAnswers;
