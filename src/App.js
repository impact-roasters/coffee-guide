import { Routes, Route, useNavigate } from "react-router-dom";

import SurveyQuestion from "./SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";

import coffeeData from "./coffee";

import "./App.css";

const App = () => {
  const { step, onSetStep, numberOfQuestions } = useSteps();

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

  const onNavigate = useNavigate();

  return (
    <div className="app">
      <h1>Coffee guide</h1>
      {step !== numberOfQuestions && (
        <p>
          Step {step + 1} / {numberOfQuestions}
        </p>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <SurveyQuestion
              question="What is your preferred coffee profile?"
              options={[{ label: "clean" }, { label: "rich" }]}
              selection={[coffeeProfile]}
              step={0}
              onOptionClick={onSetCoffeeProfile}
              onNextQuestion={() => {
                onNavigate("/acidity");
              }}
              onSetStep={onSetStep}
              isFirstQuestion
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
              step={1}
              onOptionClick={onSetAcidity}
              onNextQuestion={() => {
                onNavigate("/characteristics");
              }}
              onPreviousQuestion={() => {
                onNavigate("/");
              }}
              onSetStep={onSetStep}
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
              step={2}
              onOptionClick={onToggleCharacteristic}
              onNextQuestion={() => {
                onNavigate("/roast-level");
              }}
              onPreviousQuestion={() => {
                onNavigate("/acidity");
              }}
              onSetStep={onSetStep}
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
              step={3}
              selection={[roastLevel]}
              onOptionClick={onSetRoastLevel}
              onFinish={() => {
                onNavigate("/match");
              }}
              onPreviousQuestion={() => {
                onNavigate("/characteristics");
              }}
              onSetStep={onSetStep}
              isLastQuestion
            />
          }
        />
        <Route
          path="/match"
          element={
            <CoffeeMatch matches={coffeeData} onSetStep={onSetStep} step={4} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
