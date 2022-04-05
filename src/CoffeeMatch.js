import React from "react";

const CoffeeMatch = () => {
  [
    {
      name,
      image,
      qr,
    },
  ];
  return (
    <div>
      <h3>CoffeeMatch</h3>
      <div>
        {items.map((item) => (
          <div>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.qr}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;
