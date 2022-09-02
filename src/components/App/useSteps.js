import { useMemo } from "react";

import coffeeData from "data/coffee";

const options = [
  // Profile
  {
    type: "profile",
    value: "clean",
    label: "Clean (light body)",
    image: "https://placekitten.com/75/60",
  },
  {
    type: "profile",
    value: "rich",
    label: "Rich (full body)",
    image: "https://placekitten.com/75/60",
  },

  // Acidity
  {
    type: "acidity",
    value: "sweet",
    label: "Sweet",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "acidity",
    value: "acidic",
    label: "Acidic",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "acidity",
    value: "round",
    label: "Round",
    image: "https://placekitten.com/75/60",
  },

  // Characteristics
  {
    type: "characteristic",
    value: "chocolate",
    label: "Chocolate aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "citrus",
    label: "Citrus",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "delicate sweetness",
    label: "Delicate sweetness",
    image: "https://placekitten.com/75/60",
  },
  {
    type: "characteristic",
    value: "floral",
    label: "Floral aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "forest berry",
    label: "Forest berry aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "fruity",
    label: "Fruity",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "honey",
    label: "Honey aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "intense sweetness",
    label: "Intense sweetness",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "nougat",
    label: "Nougat aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "nut",
    label: "Nut aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "spicy",
    label: "Spicy aroma",
    image: "https://placekitten.com/75/60",
    isSmall: true,
  },

  // Roast levels
  {
    type: "roastLevel",
    value: "light",
    label: "Light",
    image: "https://placekitten.com/75/60",
  },
  {
    type: "roastLevel",
    value: "medium",
    label: "Medium",
    image: "https://placekitten.com/75/60",
  },
  {
    type: "roastLevel",
    value: "dark",
    label: "Dark",
    image: "https://placekitten.com/75/60",
  },
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
