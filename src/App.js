import { Routes, Route } from "react-router-dom";
import SurveyQuestion from "./components/SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";
import useAnswers from "./useAnswers";

import "./App.css";
import AynuImage from "./assets/aynu.png";
import BezaImage from "./assets/beza.png";
import DestaImage from "./assets/desta.png";
import KaffaImage from "./assets/kaffa.png";
import LomiImage from "./assets/lomi.png";
import MazaaImage from "./assets/mazaa.png";
import NehiImage from "./assets/nehi.png";
import SabaImage from "./assets/saba.png";
import WorkeImage from "./assets/worke.png";
import ZalaImage from "./assets/zala.png";
import ZenuImage from "./assets/zenu.png";

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
      image: AynuImage,
      rating: 88,
    },
    {
      name: "beza",
      image: BezaImage,
      rating: 92,
    },
    {
      name: "desta",
      image: DestaImage,
      rating: 87,
    },
    {
      name: "kafa",
      image: KaffaImage,
      rating: 89,
    },
    {
      name: "lomi",
      image: LomiImage,
      rating: 88,
    },
    {
      name: "maaza",
      image: MazaaImage,
      rating: 87,
    },
    {
      name: "nehi",
      image: NehiImage,
      rating: 87,
    },
    {
      name: "saba",
      image: SabaImage,
      rating: 87,
    },
    {
      name: "worke",
      image: WorkeImage,
      rating: 88,
    },
    {
      name: "zala",
      image: ZalaImage,
      rating: 87,
    },
    {
      name: "zenu",
      image: ZenuImage,
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
