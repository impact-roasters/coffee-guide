//how to get image from www.impactroasters.dk/coffee/ and add it to the array of matches
//https://www.impactroasters.dk/coffee/  and https://www.impactroasters.dk/coffee/ and
//https://www.impactroasters.dk/coffee/

import React from "react";
const CoffeeMatch = ({ matches }) => {
  return (
    <div className="match">
      <h3>Here is your Coffee match!</h3>
      <div className="match-content">
        {matches.map((item) => (
          <div className="items" key={item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <h3>{item.rating}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
