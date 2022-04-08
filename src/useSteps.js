import { useState, useMemo } from "react";

const options = [
  { type: "profile", value: "clean", label: "Clean" },
  { type: "profile", value: "rich", label: "Rich" },
  { type: "acidity", value: "sweet", label: "Sweet" },
  { type: "acidity", value: "acidic", label: "Acidic" },
  { type: "acidity", value: "round", label: "Round" },
  { type: "characteristic", value: "fruit acidity", label: "Fruit acidity" },
  { type: "characteristic", value: "nut aroma", label: "Nut aroma" },
  {
    type: "characteristic",
    value: "intense sweetness",
    label: "Intense sweetness",
  },
  { type: "characteristic", value: "spicy", label: "Spicy" },
  {
    type: "characteristic",
    value: "forest berry aroma",
    label: "Forest berry aroma",
  },
  { type: "characteristic", value: "floral", label: "Floral" },
  { type: "characteristic", value: "nougat aroma", label: "Nougat aroma" },
  {
    type: "characteristic",
    value: "delicate sweetness",
    label: "Delicate sweetness",
  },
  {
    type: "characteristic",
    value: "chocolate aroma",
    label: "Chocolate aroma",
  },
  { type: "characteristic", value: "sweet", label: "Sweet" },
  { type: "characteristic", value: "fruity", label: "Fruity" },
  { type: "characteristic", value: "citrus aroma", label: "Citrus aroma" },
  { type: "characteristic", value: "honey", label: "Honey" },
  { type: "characteristic", value: "spicy aroma", label: "Spicy aroma" },
  { type: "characteristic", value: "fresh citrus", label: "Fresh citrus" },
  { type: "roastLevel", value: "light", label: "Light" },
  { type: "roastLevel", value: "medium", label: "Medium" },
  { type: "roastLevel", value: "dark", label: "Dark" },
];

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
        options: options.filter(({ type }) => type === "profile"),
        selection: [coffeeProfile],
        onOptionClick: onSetCoffeeProfile,
      },
      {
        question: "Which one you would go for?",
        route: "/acidity",
        isMultiSelect: false,
        options: options.filter(({ type }) => type === "acidity"),
        selection: [acidity],
        onOptionClick: onSetAcidity,
      },
      {
        question:
          "Which of these characteristics would you like to experience in your cup of coffee?",
        route: "/characteristics",
        isMultiSelect: true,
        options: options.filter(({ type }) => type === "characteristic"),
        selection: characteristics,
        onOptionClick: onToggleCharacteristic,
      },
      {
        question: "What roast level do you enjoy?",
        route: "/roast-level",
        isMultiSelect: false,
        options: options.filter(({ type }) => type === "roastLevel"),
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
