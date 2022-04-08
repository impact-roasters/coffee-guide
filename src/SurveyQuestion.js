import classNames from "classnames";
import { useEffect } from "react";

import "./SurveyQuestion.css";

const SurveyQuestion = ({
  question,
  options,
  selection,
  stepIndex,
  isMultiSelect,
  isFirstQuestion,
  isLastQuestion,
  onOptionClick,
  onNextQuestion,
  onPreviousQuestion,
  onFinish,
  onSetStepCounter,
}) => {
  useEffect(() => {
    onSetStepCounter(stepIndex);
  }, [onSetStepCounter, stepIndex]);

  return (
    <div>
      <h2>{question}</h2>
      <p>
        {isMultiSelect
          ? "Select some of the following"
          : "Select one of the following"}
      </p>
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
        {!isFirstQuestion && (
          <button className="navigation-button" onClick={onPreviousQuestion}>
            Previous
          </button>
        )}
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
