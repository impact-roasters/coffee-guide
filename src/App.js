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
          { label: "espresso", imageUrl: "espresso.jpg" },
          { label: "cafe latte", imageUrl: "latte.jpg" },
          { label: "flat white", imageUrl: "flatwhite.jpg" },
          { label: "cappuccino", imageUrl: "cappuccino.jpg" },
          { label: "cortado", imageUrl: "cortado.jpg" },
        ]}
        selection={[
          "esperasso",
          "cafe latte",
          "flat white",
          "cortado",
          "cappuccino",
        ]}
        isMultiSelect={true}
        onOptionClick={() => {
          console.log("clicked");
        }}
        onNextQuestion={() => {
          console.log("How do you make your coffee at home");
        }}
        onPreviousQuestion={() => {
          console.log("previous question");
        }}
        onFinish={() => {
          console.log("finish question");
        }}
      />
    </div>
  );
};

export default App;
