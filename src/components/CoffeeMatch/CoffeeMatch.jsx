import { useMemo } from "react";
import { getMatches } from "./utility";
import "./CoffeeMatch.css";
import NavigationButton from "components/NavigationButton/NavigationButton";

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

  const primaryMatch = matches[0]; // primary match is the first item in the array
  const otherMatches = matches.slice(1, 4); // up to 3 additional matches

  return (
    <div className="match">
      <h3 className="coffee-match-title">
        {matches.length > 0
          ? "Here are your Coffee matches!"
          : "Here is your Coffee match!"}
      </h3>
      <div className="match-content">
        <div className="items">
          <a href={primaryMatch.url} target="_blank" rel="noreferrer">
            <img
              className="coffee-beans-pic"
              src={primaryMatch.image}
              alt={primaryMatch.name}
            />
            <h2>{primaryMatch.name}</h2>
            <h3>{primaryMatch.qGrade}</h3>
            <h3>{primaryMatch.characteristicMatches}</h3>
          </a>
        </div>
        {otherMatches.map((item) => (
          <div className="items" key={item.name}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
              <img
                className="coffee-beans-pic"
                src={item.image}
                alt={item.name}
              />
              <h2>{item.name}</h2>
              <h3>{item.qGrade}</h3>
              <h3>{item.characteristicMatches}</h3>
            </a>
          </div>
        ))}
      </div>
      <div className="navigation-button-container">
        <NavigationButton to="/">let’s try again</NavigationButton>
      </div>
    </div>
  );
};

export default CoffeeMatch;
