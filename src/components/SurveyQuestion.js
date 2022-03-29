const SurveyQuestion = ({
  question,
  options,
  selection,
  isMultiSelect,
  onOptionClick,
  onNextQuestion,
  onPreviousQuestion,
  onFinish,
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
