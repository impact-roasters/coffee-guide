import React from "react";
import coffeeMatch from "./CoffeeMatch.css";
const CoffeeMatch = ({ matches }) => {
  return (
    <div className="match">
      <h3 className="coffee-match-title">Here is your Coffee match!</h3>
      <div className="match-content">
        {matches.map((item) => (
          <div className="items" key={item.name}>
            <img className="coffee-beans-pic" src={item.image} />
            <h2>{item.name}</h2>
            <h3>{item.rating}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
