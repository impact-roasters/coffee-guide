import { useEffect } from "react";
import "./CoffeeMatch.css";

const CoffeeMatch = ({ matches, stepIndex, onSetStepCounter }) => {
  useEffect(() => {
    onSetStepCounter(stepIndex);
  }, [onSetStepCounter, stepIndex]);

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
