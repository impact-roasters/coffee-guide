import { useMemo } from "react";

import coffeeData from "data/coffee";

const options = [
  // Profile
  { type: "profile", value: "clean", label: "Clean (light body)" },
  { type: "profile", value: "rich", label: "Rich (full body)" },

  // Acidity
  { type: "acidity", value: "sweet", label: "Sweet" },
  { type: "acidity", value: "acidic", label: "Acidic" },
  { type: "acidity", value: "round", label: "Round" },

  // Characteristics
  {
    type: "characteristic",
    value: "chocolate",
    label: "Chocolate aroma",
  },
  { type: "characteristic", value: "citrus", label: "Citrus" },
  {
    type: "characteristic",
    value: "delicate sweetness",
    label: "Delicate sweetness",
  },
  { type: "characteristic", value: "floral", label: "Floral aroma" },
  {
    type: "characteristic",
    value: "forest berry",
    label: "Forest berry aroma",
  },
  { type: "characteristic", value: "fruity", label: "Fruity" },
  { type: "characteristic", value: "honey", label: "Honey aroma" },
  {
    type: "characteristic",
    value: "intense sweetness",
    label: "Intense sweetness",
  },
  { type: "characteristic", value: "nougat", label: "Nougat aroma" },
  { type: "characteristic", value: "nut", label: "Nut aroma" },
  { type: "characteristic", value: "spicy", label: "Spicy aroma" },

  // Roast levels
  { type: "roastLevel", value: "light", label: "Light" },
  { type: "roastLevel", value: "medium", label: "Medium" },
  { type: "roastLevel", value: "dark", label: "Dark" },
];

const useSteps = ({
  profile,
  acidity,
  characteristics,
  roastLevel,
  onSetProfile,
  onSetAcidity,
  onToggleCharacteristic,
  onSetRoastLevel,
}) => {
  const steps = useMemo(
    () => [
      {
        question: "What is your preferred coffee profile?",
        route: "/",
        isMultiSelect: false,
        options: options.filter(({ type }) => type === "profile"),
        selection: [profile],
        onOptionClick: onSetProfile,
      },
      {
        question: "Which one you would go for?",
        route: "/acidity",
        isMultiSelect: false,
        options: options
          .filter(({ type }) => type === "acidity")
          .filter(({ value }) =>
            coffeeData
              .filter(({ profile: coffeeProfile }) => coffeeProfile === profile)
              .map(({ acidity: coffeeAcidity }) => coffeeAcidity)
              .flat()
              .includes(value)
          ),
        selection: [acidity],
        onOptionClick: onSetAcidity,
      },
      {
        question:
          "Which of these characteristics would you like to experience in your cup of coffee?",
        route: "/characteristics",
        isMultiSelect: true,
        options: options
          .filter(({ type }) => type === "characteristic")
          .filter(({ value }) =>
            coffeeData
              .filter(({ profile: coffeeProfile }) => coffeeProfile === profile)
              .filter(({ acidity: coffeeAcidity }) => coffeeAcidity === acidity)
              .map(({ characteristics }) => characteristics)
              .flat(2)
              .includes(value)
          ),
        selection: characteristics,
        onOptionClick: onToggleCharacteristic,
      },
      {
        question: "What roast level do you enjoy?",
        route: "/roast-level",
        isMultiSelect: false,
        options: options
          .filter(({ type }) => type === "roastLevel")
          .filter(({ value }) =>
            coffeeData
              .filter(({ profile: coffeeProfile }) => coffeeProfile === profile)
              .filter(({ acidity: coffeeAcidity }) => coffeeAcidity === acidity)
              .filter(({ characteristics: coffeeCharacteristics }) =>
                characteristics.some((characteristic) =>
                  coffeeCharacteristics.includes(characteristic)
                )
              )
              .map(({ roastLevels }) => roastLevels)
              .flat()
              .includes(value)
          ),
        selection: [roastLevel],
        onOptionClick: onSetRoastLevel,
      },
    ],
    [
      profile,
      acidity,
      characteristics,
      roastLevel,
      onSetProfile,
      onSetAcidity,
      onToggleCharacteristic,
      onSetRoastLevel,
    ]
  );

  return steps;
};

export default useSteps;
