import classNames from "classnames";

const SurveyQuestion = ({
  question,
  options,
  selection,
  onOptionClick,
  onNextQuestion,
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
        <button onClick={onNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default SurveyQuestion;
