import React from "react";

const CoffeeMatch = () => {
  [
    {
      name: "aynu",
      image: "./assets/aynu.png",
      rating: 4,
    },
    {
      name: "beza",
      image: "./assets/beza.png",
      rating: 3,
    },
    {
      name: "desta",
      image: "./assets/desta.png",
      rating: 5,
    },
    {
      name: "kafa",
      image: "./assets/kafa.png",
      rating: 4,
    },
    {
      name: "lomi",
      image: "./assets/lomi.png",
      rating: 3,
    },
    {
      name: "maaza",
      image: "./assets/maaza.png",
      rating: 5,
    },
    {
      name: "nehi",
      image: "./assets/nehi.png",
      rating: 4,
    },
    {
      name: "saba",
      image: "./assets/saba.png",
      rating: 3,
    },
    {
      name: "worke",
      image: "./assets/worke.png",
      rating: 5,
    },
    {
      name: "zala",
      image: "./assets/zala.png",
      rating: 4,
    },
    {
      name: "zenu",
      image: "./assets/zenu.png",
      rating: 3,
    },
  ];
  return (
    <div>
      <h3>CoffeeMatch</h3>
      <div className="coffee-list">
        {items.map((item) => (
          <div key={item.id} className="coffee-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.rating}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeMatch;

//get a list of items as a props and render them with their name and picture and link to impact roasters website
