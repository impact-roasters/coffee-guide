import UseAnswersShowcase from "./UseAnswersShowcase";
import SurveyQuestion from "./components/SurveyQuestion";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Coffee guide</h1>
      <UseAnswersShowcase />

      <SurveyQuestion
        question="LET'S FIND YOUR COFFEE FIT?"
        options={[
          { label: "cappuccino", imageUrl: "cappuccino.jpg" },
          { label: "espresso", imageUrl: "espresso.jpg" },
          { label: "cafe latte", imageUrl: "latte.jpg" },
          { label: "flat white", imageUrl: "flatwhite.jpg" },
          { label: "cortado", imageUrl: "cortado.jpg" }, //
          { label: "macchiato", imageUrl: "macchiato.jpg" },
          { label: "mocha", imageUrl: "mocha.jpg" },
          { label: "americano", imageUrl: "americano.jpg" },
        ]}
        selection={[
          "espresso",
          "cafe latte",
          "flat white",
          "cortado",
          "cappuccino",
        ]}
        onOptionClick={() => {
          console.log("selected");
        }}
        onNextQuestion={() => {
          console.log("How do you make your coffee at home?");
        }}
        onPreviousQuestion={() => {
          console.log("What kind of coffee do you like?");
        }}
        onFinish={() => {
          console.log("Thank you for your time!");
        }}
      />
    </div>
  );
};

export default App;
