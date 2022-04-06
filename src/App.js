import { Routes, Route } from "react-router-dom";
import SurveyQuestion from "./components/SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";
import useAnswers from "./useAnswers";
import "./assets/aynu.png";

import "./App.css";

const App = () => {
  const {
    coffeeProfile,
    acidity,
    characteristics,
    roastLevel,
    onSetCoffeeProfile,
    onSetAcidity,
    onToggleCharacteristic,
    onSetRoastLevel,
  } = useAnswers();
  const matches = [
    {
      name: "aynu",
      image: "./assets/aynu.png",
      rating: 88,
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
      rating: 87,
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
    <div className="app">
      <h1>Coffee guide</h1>
      <Routes>
        <Route
          path="/"
          element={
            <SurveyQuestion
              question="What is your preferred coffee profile?"
              options={[{ label: "clean" }, { label: "rich" }]}
              selection={[coffeeProfile]}
              onOptionClick={onSetCoffeeProfile}
              onNextQuestion={() => {}}
              onPreviousQuestion={() => {}}
              onFinish={() => {}}
            />
          }
        />
        <Route
          path="/acidity"
          element={
            <SurveyQuestion
              question="Which one you would go for?"
              options={[
                { label: "sweet" },
                { label: "acidic" },
                { label: "round" },
              ]}
              selection={[acidity]}
              onOptionClick={onSetAcidity}
              onNextQuestion={() => {}}
              onPreviousQuestion={() => {}}
              onFinish={() => {}}
            />
          }
        />
        <Route
          path="/characteristics"
          element={
            <SurveyQuestion
              question="Which of these characteristics would you like to experience in your cup of coffee?"
              options={[
                { label: "chocolate" },
                { label: "citrus" },
                { label: "nougat" },
              ]}
              selection={characteristics}
              onOptionClick={onToggleCharacteristic}
              onNextQuestion={() => {}}
              onPreviousQuestion={() => {}}
              onFinish={() => {}}
            />
          }
        />
        <Route
          path="/roast-level"
          element={
            <SurveyQuestion
              question="What roast level do you enjoy?"
              options={[
                { label: "light" },
                { label: "medium" },
                { label: "dark" },
              ]}
              selection={[roastLevel]}
              onOptionClick={onSetRoastLevel}
              onNextQuestion={() => {}}
              onPreviousQuestion={() => {}}
              onFinish={() => {}}
            />
          }
        />
      </Routes>
      <CoffeeMatch matches={matches} />
    </div>
  );
};

export default App;
