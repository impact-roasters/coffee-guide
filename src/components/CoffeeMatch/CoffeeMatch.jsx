import { useMemo } from "react";

import { getMatches } from "./utility";

import "./CoffeeMatch.css";

import TryAgainButton from "components/TryAgainButton/TryAgainButton";

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
      <TryAgainButton />
    </div>
  );
};

export default CoffeeMatch;
