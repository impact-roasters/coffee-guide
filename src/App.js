import { Routes, Route, useNavigate } from "react-router-dom";

import SurveyQuestion from "./SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";

import coffeeData from "./coffee";

import "./App.css";

const App = () => {
  const answers = useAnswers();

  const { steps, stepCounter, onSetStepCounter, numberOfQuestions } =
    useSteps(answers);

  const onNavigate = useNavigate();

  return (
    <div className="app">
      <h1>Coffee guide</h1>
      {stepCounter !== numberOfQuestions && (
        <p>
          Step {stepCounter + 1} / {numberOfQuestions}
        </p>
      )}
      <Routes>
        {steps.map((step, stepIndex) => (
          <Route
            key={step.route}
            path={step.route}
            element={
              <SurveyQuestion
                question={step.question}
                options={step.options}
                selection={step.selection}
                stepIndex={stepIndex}
                onOptionClick={step.onOptionClick}
                onNextQuestion={() => {
                  onNavigate(steps[stepIndex + 1]?.route ?? "/");
                }}
                onPreviousQuestion={() => {
                  onNavigate(steps[stepIndex - 1]?.route ?? "/");
                }}
                onFinish={() => {
                  onNavigate("/match");
                }}
                onSetStepCounter={onSetStepCounter}
                isFirstQuestion={stepIndex === 0}
                isLastQuestion={stepIndex === numberOfQuestions - 1}
              />
            }
          />
        ))}
        <Route
          path="/match"
          element={
            <CoffeeMatch
              matches={coffeeData}
              onSetStepCounter={onSetStepCounter}
              stepIndex={4}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
