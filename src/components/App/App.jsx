import { Routes, Route } from "react-router-dom";

import Header from "components/Header/Header";
import SurveyQuestion from "components/SurveyQuestion/SurveyQuestion";
import CoffeeMatch from "components/CoffeeMatch/CoffeeMatch";
import Debugger from "./Debugger";
import Footer from "components/Footer/Footer";

import useAnswers from "./useAnswers";
import useSteps from "./useSteps";
import { useLocaleState, LocaleContext } from "./useLocale";

import "./App.css";

const App = () => {
  const { locale, setLocaleToEnglish, setLocaleToDanish } = useLocaleState();

  const answers = useAnswers();

  const steps = useSteps(answers);

  return (
    <LocaleContext.Provider value={locale}>
      <div className="app">
        <Header
          setLocaleToEnglish={setLocaleToEnglish}
          setLocaleToDanish={setLocaleToDanish}
        />
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
                      startRoute={steps[0].route}
                      stepIndex={stepIndex}
                      steps={steps}
                      isMultiSelect={step.isMultiSelect}
                    />
                  }
                />
              ))}
              <Route
                path="/match"
                element={<CoffeeMatch answers={answers} />}
              />
            </Routes>
          </div>
          <Debugger answers={answers} />
        </main>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
};

export default App;
