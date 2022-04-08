import { Routes, Route } from "react-router-dom";
import SurveyQuestion from "./components/SurveyQuestion";
import "./App.css";

const App = () => {
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
              selection={[]}
              onOptionClick={() => {}}
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
              selection={[]}
              onOptionClick={() => {}}
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
              selection={[]}
              onOptionClick={() => {}}
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
              selection={[]}
              onOptionClick={() => {}}
              onNextQuestion={() => {}}
              onPreviousQuestion={() => {}}
              onFinish={() => {}}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
