import classNames from "classnames";

import "./SurveyQuestion.css";

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
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option.label}>
            <button
              className={classNames("option-button", {
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
        <button className="navigation-button" onClick={onPreviousQuestion}>
          Previous
        </button>
        {isLastQuestion ? (
          <button className="navigation-button" onClick={onFinish}>
            Finish
          </button>
        ) : (
          <button className="navigation-button" onClick={onNextQuestion}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default SurveyQuestion;
