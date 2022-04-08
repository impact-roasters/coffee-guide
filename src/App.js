import { Routes, Route } from "react-router-dom";

import SurveyQuestion from "./SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";

import coffeeData from "./coffee";

import "./App.css";

const App = () => {
  const { step, onNextStep, onPreviousStep, numberOfQuestions } = useSteps();

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
      <p>
        Step {step + 1} / {numberOfQuestions}
      </p>
      <Routes>
        <Route
          path="/"
          element={
            <SurveyQuestion
              question="What is your preferred coffee profile?"
              options={[{ label: "clean" }, { label: "rich" }]}
              selection={[coffeeProfile]}
              onOptionClick={onSetCoffeeProfile}
              onNextQuestion={() => {
                onNextStep();
              }}
              onPreviousQuestion={() => {
                onPreviousStep();
              }}
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
              onNextQuestion={() => {
                onNextStep();
              }}
              onPreviousQuestion={() => {
                onPreviousStep();
              }}
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
              onNextQuestion={() => {
                onNextStep();
              }}
              onPreviousQuestion={() => {
                onPreviousStep();
              }}
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
              onFinish={() => {
                onNextStep();
              }}
              onPreviousQuestion={() => {
                onPreviousStep();
              }}
              isLastQuestion
            />
          }
        />
        <Route path="/match" element={<CoffeeMatch matches={coffeeData} />} />
      </Routes>
    </div>
  );
};

export default App;
