import { useState } from "react";

const useAnswers = () => {
  const [coffeeProfile, onSetCoffeeProfile] = useState(null);
  const [characteristic, onSetCharacteristic] = useState(null);
  const [tastes, onSetTastes] = useState([]);

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
