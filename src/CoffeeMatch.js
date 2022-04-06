import React from "react";

const CoffeeMatch = ({ matches }) => {
  return (
    <div>
      <h3>Here is your Coffee match!</h3>
      <div>
        {matches.map((item) => (
          <div key={item.name}>
            <img src={item.image} />
            <h2>{item.name}</h2>
            <h3>{item.qr}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
