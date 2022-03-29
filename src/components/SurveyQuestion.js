const SurveyQuestion = ({
	question: "what is your favourite coffee?",
	options: [
		{ label: "esperasso", imageUrl: "esperasso.jpg" },
		{ label: "late", imageUrl: "late.jpg" },
	],
	selection: "",
	isMultiSelect: false,
	onOptionClick: () => {
		console.log("option clicked");
	},
	onNextQuestion: () => {
		console.log("next question");
	},
	onPreviousQuestion: () => {
		console.log("previous question");
	},
	onFinish: () => {
		console.log("finish");
	},
}) => {
  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <button onClick={() => onOptionClick(option.label)}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onNextQuestion}>Next</button>
      <button onClick={onPreviousQuestion}>Previous</button>
      <button onClick={onFinish}>Finish</button>
    </div>
  );
};

export default SurveyQuestion;
