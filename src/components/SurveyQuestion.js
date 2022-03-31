const SurveyQuestion = ({
  question,
  options,
  selection,
  isMultiSelect,
  onOptionClick,
  onNextQuestion,
  onPreviousQuestion,
  onFinish,
  isLastQuestion,
}) => {
  return (
    <div>
      {/* <h1>{question}</h1> */}
      <ul className="space">
        {options.map((option) => (
          <li key={option.label}>
            <button
              className="selected"
              onClick={() => onOptionClick(option.label)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button className="prev" onClick={onPreviousQuestion}>
          Previous
        </button>
        {isLastQuestion ? (
          <button onClick={onFinish}>Finish</button>
        ) : (
          <button onClick={onNextQuestion}>Next</button>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestion;
