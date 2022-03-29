import UseAnswersShowcase from "./UseAnswersShowcase";
import SurveyQuestion from "./components/SurveyQuestion";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Coffee guide</h1>
      <UseAnswersShowcase />
      <SurveyQuestion
        question="what is your favourite coffee?"
        options={[
          { label: "esperasso", imageUrl: "esperasso.jpg" },
          { label: "late", imageUrl: "late.jpg" },
        ]}
        selection=""
        isMultiSelect={false}
        onOptionClick={() => {
          console.log("option clicked");
        }}
        onNextQuestion={() => {
          console.log("next question");
        }}
        onPreviousQuestion={() => {
          console.log("previous question");
        }}
        onFinish={() => {
          console.log("finish");
        }}
      />
    </div>
  );
};

export default App;
