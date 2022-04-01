import { useState, useEffect } from "react";

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

  const onToggleTaste = (taste) => {
    if (tastes.includes(taste)) {
      onSetTastes(tastes.filter((filteredTaste) => filteredTaste !== taste));
    } else {
      onSetTastes([...tastes, taste]);
    }
  };

  return {
    coffeeProfile,
    characteristic,
    tastes,
    onSetCoffeeProfile,
    onSetCharacteristic,
    onToggleTaste,
  };
};

export default useAnswers;
