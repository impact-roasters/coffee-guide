import coffeeData from "./coffee";

const getMatches = ({ profile, acidity, characteristics, roastLevel }) =>
  coffeeData
    .filter(({ profile: coffeeProfile }) => coffeeProfile === profile)
    .filter(({ acidity: coffeeAcidity }) => coffeeAcidity === acidity)
    .filter(({ roastLevels: coffeeRoastLevels }) =>
      coffeeRoastLevels.includes(roastLevel)
    )
    .filter(({ characteristics: coffeeCharacteristics }) =>
      characteristics.some((characteristic) =>
        coffeeCharacteristics.includes(characteristic)
      )
    )
    .map((coffee) => ({
      ...coffee,
      characteristicMatches: characteristics.filter((characteristic) =>
        coffee.characteristics.includes(characteristic)
      ).length,
    }))
    .sort((a, b) => b.characteristicMatches - a.characteristicMatches);

export { getMatches };
