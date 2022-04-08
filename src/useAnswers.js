import { useState, useEffect, useCallback } from "react";

const useAnswers = () => {
  const [coffeeProfile, onSetCoffeeProfile] = useState(
    localStorage.getItem("coffeeProfile") ?? null
  );
  const [characteristic, onSetCharacteristic] = useState(
    localStorage.getItem("characteristic") ?? null
  );
  const [tastes, onSetTastes] = useState(
    JSON.parse(localStorage.getItem("tastes")) ?? []
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
    if (characteristic !== null) {
      localStorage.setItem("characteristic", characteristic);
    }
  }, [characteristic]);

  useEffect(() => {
    localStorage.setItem("tastes", JSON.stringify(tastes));
  }, [tastes]);

  useEffect(() => {
    if (roastLevel !== null) {
      localStorage.setItem("roastLevel", roastLevel);
    }
  }, [roastLevel]);

  const onToggleTaste = useCallback(
    (taste) => {
      if (tastes.includes(taste)) {
        onSetTastes(tastes.filter((filteredTaste) => filteredTaste !== taste));
      } else {
        onSetTastes([...tastes, taste]);
      }
    },
    [tastes]
  );

  return {
    coffeeProfile,
    characteristic,
    tastes,
    roastLevel,
    onSetCoffeeProfile,
    onSetCharacteristic,
    onToggleTaste,
    onSetRoastLevel,
  };
};

export default useAnswers;
