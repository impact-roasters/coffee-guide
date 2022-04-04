import React from "react";

const CoffeeMatch = () => {
  [
    {
      name: "aynu",
      image: "./assets/aynu.png",
      qr: 88,
    },
    {
      name: "beza",
      image: "./assets/beza.png",
      rating: 92,
    },
    {
      name: "desta",
      image: "./assets/desta.png",
      rating: 87,
    },
    {
      name: "kafa",
      image: "./assets/kafa.png",
      rating: 89,
    },
    {
      name: "lomi",
      image: "./assets/lomi.png",
      rating: 88,
    },
    {
      name: "maaza",
      image: "./assets/maaza.png",
      rating: 5,
    },
    {
      name: "nehi",
      image: "./assets/nehi.png",
      rating: 87,
    },
    {
      name: "saba",
      image: "./assets/saba.png",
      rating: 87,
    },
    {
      name: "worke",
      image: "./assets/worke.png",
      rating: 88,
    },
    {
      name: "zala",
      image: "./assets/zala.png",
      rating: 87,
    },
    {
      name: "zenu",
      image: "./assets/zenu.png",
      rating: 82,
    },
  ];
  return (
    <div>
      <h3>CoffeeMatch</h3>
      <div className="coffee-list">
        {items.map((item) => (
          <div className="coffee-item">
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

//get a list of items as a props and render them with their name and picture and link to impact roasters website
