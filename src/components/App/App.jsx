import { Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import SurveyQuestion from "../../components/SurveyQuestion/SurveyQuestion";
import CoffeeMatch from "../../components/CoffeeMatch/CoffeeMatch";
import Debugger from "./Debugger";
import Footer from "../../components/Footer/Footer";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";

import "./App.css";

const App = () => {
  const answers = useAnswers();

  const steps = useSteps(answers);

  return (
    <div className="app">
      <Header />
      <main>
        <h1>Find your best coffee match</h1>
        <div className="main-content">
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
        <Debugger answers={answers} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
