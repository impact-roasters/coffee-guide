import { Routes, Route } from "react-router-dom";

import SurveyQuestion from "./SurveyQuestion";
import CoffeeMatch from "./CoffeeMatch";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";

import "./App.css";

const App = () => {
  const answers = useAnswers();

  const steps = useSteps(answers);

  return (
    <div className="app">
      <h1>Coffee guide</h1>
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
                onOptionClick={step.onOptionClick}
                nextRoute={steps[stepIndex + 1]?.route ?? "/match"}
                previousRoute={steps[stepIndex - 1]?.route ?? "/"}
                isFirstQuestion={stepIndex === 0}
                isLastQuestion={stepIndex === steps.length - 1}
                isMultiSelect={step.isMultiSelect}
              />
            }
          />
        ))}
        <Route path="/match" element={<CoffeeMatch answers={answers} />} />
      </Routes>
    </div>
  );
};

export default App;
