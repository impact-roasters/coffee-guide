import classNames from "classnames";

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
      <h1>{question}</h1>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <button
              className={classNames({
                selected: selection.includes(option.label),
              })}
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
