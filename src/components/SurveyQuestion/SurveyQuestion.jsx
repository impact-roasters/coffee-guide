import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import QuestionnaireButton from "components/QuestionnaireButton/QuestionnaireButton";

import "./SurveyQuestion.css";

const SurveyQuestion = ({
  question,
  options,
  selection,
  isMultiSelect,
  isFirstQuestion,
  isLastQuestion,
  onOptionClick,
  nextRoute,
  previousRoute,
  startRoute,
}) => {
  useEffect(() => {
    if (options.length === 1) {
      onOptionClick(options[0].value);
      window.location.replace(`${process.env.PUBLIC_URL}${nextRoute}`);
    }
  }, [nextRoute, onOptionClick, options]);

  const onNavigate = useNavigate();

  if (options.length === 1) {
    return null;
  }

  return (
    <div className="survey-question">
      <h2>{question}</h2>
      <p>
        {isMultiSelect
          ? "Select some of the following"
          : "Select one of the following"}
      </p>
      <ul className="options">
        {options.map((option) => (
          <li key={option.value}>
            <button
              className={classNames("option-button", {
                selected: selection.includes(option.value),
              })}
              onClick={() => onOptionClick(option.value)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={classNames("navigation-buttons-container", {
          "first-question": isFirstQuestion,
        })}
      >
        {!isFirstQuestion && (
          <QuestionnaireButton to={previousRoute}>back</QuestionnaireButton>
        )}
        <QuestionnaireButton to={nextRoute}>
          {isLastQuestion ? "finish" : "next"}
        </QuestionnaireButton>
      </div>
    </div>
  );
};

export default SurveyQuestion;
