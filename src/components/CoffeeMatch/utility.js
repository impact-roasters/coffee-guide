import coffeeData from "data/coffee";

const getMatches = ({ profile, acidity, characteristics, roastLevel }) =>
  coffeeData
    .filter(
      ({ profile: coffeeProfile }) =>
        profile === null || coffeeProfile === profile
    )
    .filter(
      ({ acidity: coffeeAcidity }) =>
        acidity === null || coffeeAcidity === acidity
    )
    .filter(
      ({ roastLevels: coffeeRoastLevels }) =>
        roastLevel === null || coffeeRoastLevels.includes(roastLevel)
    )
    .filter(
      ({ characteristics: coffeeCharacteristics }) =>
        characteristics.length === 0 ||
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
