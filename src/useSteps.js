import { useState, useMemo } from "react";

const useSteps = ({
  coffeeProfile,
  acidity,
  characteristics,
  roastLevel,
  onSetCoffeeProfile,
  onSetAcidity,
  onToggleCharacteristic,
  onSetRoastLevel,
}) => {
  const [stepCounter, onSetStepCounter] = useState(0);

  const steps = useMemo(
    () => [
      {
        question: "What is your preferred coffee profile?",
        route: "/",
        isMultiSelect: false,
        options: [{ label: "clean" }, { label: "rich" }],
        selection: [coffeeProfile],
        onOptionClick: onSetCoffeeProfile,
      },
      {
        question: "Which one you would go for?",
        route: "/acidity",
        isMultiSelect: false,
        options: [{ label: "sweet" }, { label: "acidic" }, { label: "round" }],
        selection: [acidity],
        onOptionClick: onSetAcidity,
      },
      {
        question:
          "Which of these characteristics would you like to experience in your cup of coffee?",
        route: "/characteristics",
        isMultiSelect: true,
        options: [
          { label: "chocolate" },
          { label: "citrus" },
          { label: "nougat" },
        ],
        selection: characteristics,
        onOptionClick: onToggleCharacteristic,
      },
      {
        question: "What roast level do you enjoy?",
        route: "/roast-level",
        isMultiSelect: false,
        options: [{ label: "light" }, { label: "medium" }, { label: "dark" }],
        selection: [roastLevel],
        onOptionClick: onSetRoastLevel,
      },
    ],
    [
      coffeeProfile,
      acidity,
      characteristics,
      roastLevel,
      onSetCoffeeProfile,
      onSetAcidity,
      onToggleCharacteristic,
      onSetRoastLevel,
    ]
  );

  return {
    stepCounter,
    onSetStepCounter,
    numberOfQuestions: steps.length,
    steps,
  };
};

export default useSteps;
