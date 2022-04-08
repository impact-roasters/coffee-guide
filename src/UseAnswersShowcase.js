import useAnswers from "./useAnswers";

const UseAnswersShowcase = () => {
  const {
    coffeeProfile,
    characteristic,
    tastes,
    roastLevel,
    onSetCoffeeProfile,
    onSetCharacteristic,
    onToggleTaste,
    onSetRoastLevel,
  } = useAnswers();
  return (
    <>
      <button onClick={() => onSetCoffeeProfile("clean")}>Clean</button>
      <button onClick={() => onSetCoffeeProfile("rich")}>Rich</button>
      <hr />
      <button onClick={() => onSetCharacteristic("sweet")}>Sweet</button>
      <button onClick={() => onSetCharacteristic("acidic")}>Acidic</button>
      <button onClick={() => onSetCharacteristic("round")}>Round</button>
      <hr />
      <button onClick={() => onToggleTaste("chocolate")}>Chocolate</button>
      <button onClick={() => onToggleTaste("spicy")}>Spicy</button>
      <button onClick={() => onToggleTaste("floral")}>Floral</button>
      <button onClick={() => onToggleTaste("fresh citrus")}>
        Fresh Citrus
      </button>
      <hr />
      <button onClick={() => onSetRoastLevel("light")}>Light</button>
      <button onClick={() => onSetRoastLevel("medium")}>Medium</button>
      <button onClick={() => onSetRoastLevel("dark")}>Dark</button>
      <hr />
      <div>{coffeeProfile}</div>
      <div>{characteristic}</div>
      <div>{tastes.join(", ")}</div>
      <div>{roastLevel}</div>
    </>
  );
};

export default UseAnswersShowcase;
