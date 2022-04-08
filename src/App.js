import { Routes, Route } from "react-router-dom";
import SurveyQuestion from "./components/SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";
import useAnswers from "./useAnswers";
import coffeeData from "./coffee";

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
      <CoffeeMatch matches={coffeeData} />
    </div>
  );
};

export default App;
