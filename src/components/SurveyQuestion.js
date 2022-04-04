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
  isSingleSelect,
}) => {
  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <button
              className={
                { selected: selection.includes(option.label) }
                  ? "check"
                  : "selected"
              }
              onClick={() => onOptionClick(option.label)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <div>
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
