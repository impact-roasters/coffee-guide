import { useMemo } from "react";

import coffeeData from "data/coffee";

const options = [
  // Profile
  {
    type: "profile",
    value: "clean",
    label: "Clean: light, delicate consistency and flavour",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "profile",
    value: "rich",
    label: "Full: heavier consistency and deeper flavour",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "profile",
    value: "all",
    label: "I like both!",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "profile",
    value: "skip",
    label: "Not sure. Let’s skip this part.",
    image: "https://placekitten.com/95/65",
  },

  // Acidity
  {
    type: "acidity",
    value: "sweet",
    label: "Sweet",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "acidity",
    value: "acidic",
    label: "Acidic",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "acidity",
    value: "round",
    label: "Round: somewhere between sweet an acidic",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "acidity",
    value: "all",
    label: "All of the above!",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "acidity",
    value: "skip",
    label: "Not sure. Let’s skip this part.",
    image: "https://placekitten.com/95/65",
  },

  // Characteristics
  {
    type: "characteristic",
    value: "chocolate",
    label: "Chocolate aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "citrus",
    label: "Citrus",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "delicate sweetness",
    label: "Delicate sweetness",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "floral",
    label: "Floral aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "forest berry",
    label: "Forest berry aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "fruity",
    label: "Fruity",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "honey",
    label: "Honey aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "intense sweetness",
    label: "Intense sweetness",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "nougat",
    label: "Nougat aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "nut",
    label: "Nut aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "spicy",
    label: "Spicy aroma",
    image: "https://placekitten.com/95/65",
    isSmall: true,
  },
  {
    type: "characteristic",
    value: "skip",
    label: "Not sure. Let’s skip this part.",
    image: "https://placekitten.com/95/65",
  },

  // Roast levels
  {
    type: "roastLevel",
    value: "light",
    label:
      "Light: light brown beans with no oil on the surface, great for milder coffee varieties. Grainy taste.",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "roastLevel",
    value: "medium",
    label:
      "Medium: medium brown beans with no oil on the surface. No grainy taste, more balanced flavor, aroma, and acidity.",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "roastLevel",
    value: "dark",
    label:
      "Dark: dark beans and heavier consistency and less acidity that the above varieties.",
    image: "https://placekitten.com/95/65",
  },
  {
    type: "roastLevel",
    value: "skip",
    label: "Not sure. Let’s skip this part.",
    image: "https://placekitten.com/95/65",
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
        title: "Consistency",
        route: "/",
        isMultiSelect: false,
        options: options.filter(({ type }) => type === "profile"),
        selection: [profile],
        onOptionClick: onSetProfile,
      },
      {
        question: "Which one you would go for?",
        title: "Acidity",
        route: "/acidity",
        isMultiSelect: false,
        options: options
          .filter(({ type }) => type === "acidity")
          .filter(
            ({ value }) =>
              ["all", "skip"].includes(value) ||
              coffeeData
                .filter(
                  ({ profile: coffeeProfile }) =>
                    coffeeProfile === profile ||
                    ["all", "skip"].includes(profile)
                )
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
        title: "Aroma",
        route: "/characteristics",
        isMultiSelect: true,
        options: options
          .filter(({ type }) => type === "characteristic")
          .filter(
            ({ value }) =>
              ["all", "skip"].includes(value) ||
              coffeeData
                .filter(
                  ({ profile: coffeeProfile }) =>
                    coffeeProfile === profile ||
                    ["all", "skip"].includes(profile)
                )
                .filter(
                  ({ acidity: coffeeAcidity }) =>
                    coffeeAcidity === acidity ||
                    ["all", "skip"].includes(acidity)
                )
                .map(({ characteristics }) => characteristics)
                .flat(2)
                .includes(value)
          ),
        selection: characteristics,
        onOptionClick: onToggleCharacteristic,
      },
      {
        question: "What roast level do you enjoy?",
        title: "Roast level",
        route: "/roast-level",
        isMultiSelect: false,
        options: options
          .filter(({ type }) => type === "roastLevel")
          .filter(
            ({ value }) =>
              ["all", "skip"].includes(value) ||
              coffeeData
                .filter(
                  ({ profile: coffeeProfile }) =>
                    coffeeProfile === profile ||
                    ["all", "skip"].includes(profile)
                )
                .filter(
                  ({ acidity: coffeeAcidity }) =>
                    coffeeAcidity === acidity ||
                    ["all", "skip"].includes(acidity)
                )
                .filter(
                  ({ characteristics: coffeeCharacteristics }) =>
                    characteristics.some((characteristic) =>
                      coffeeCharacteristics.includes(characteristic)
                    ) || ["all", "skip"].includes(characteristics)
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
