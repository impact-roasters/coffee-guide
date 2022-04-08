import { useMemo } from "react";

import coffeeData from "./coffee";

import "./CoffeeMatch.css";

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

const CoffeeMatch = ({ answers }) => {
  const { profile, acidity, characteristics, roastLevel } = answers;

  const matches = useMemo(
    () =>
      getMatches({
        profile,
        acidity,
        characteristics,
        roastLevel,
      }),
    [acidity, characteristics, profile, roastLevel]
  );

  return (
    <div className="match">
      <h3 className="coffee-match-title">Here is your Coffee match!</h3>
      <div className="match-content">
        {matches.map((item) => (
          <div className="items" key={item.name}>
            <img
              className="coffee-beans-pic"
              src={item.image}
              alt={item.name}
            />
            <h2>{item.name}</h2>
            <h3>{item.qGrade}</h3>
            <h3>{item.characteristicMatches}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
