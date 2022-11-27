import { useEffect, useMemo } from "react";
import classNames from "classnames";

import NavigationButton from "components/NavigationButton/NavigationButton";
import OptionButton from "components/OptionButton/OptionButton";
import ProgressBar from "components/ProgressBar/ProgressBar";

import "./SurveyQuestion.css";

const SurveyQuestion = ({
  question,
  options,
  selection,
  isMultiSelect,
  steps,
  stepIndex,
  onOptionClick,
  nextRoute,
  previousRoute,
}) => {
  const isFirstQuestion = useMemo(() => stepIndex === 0, [stepIndex]);
  const isLastQuestion = useMemo(
    () => stepIndex === steps.length - 1,
    [stepIndex, steps.length]
  );

  useEffect(() => {
    if (options.length === 1) {
      onOptionClick(options[0].value);
      window.location.replace(`${process.env.PUBLIC_URL}${nextRoute}`);
    }
  }, [nextRoute, onOptionClick, options]);

  if (options.length === 1) {
    return null;
  }

  return (
    <div className="survey-question">
      <ProgressBar steps={steps} stepIndex={stepIndex} />
      <h2>{question}</h2>
      <p>
        {isMultiSelect
          ? "Select some of the following"
          : "Select one of the following"}
      </p>
      <ul className="options">
        {options.map((option) => (
          <li
            key={option.value}
            className={classNames({ small: option.isSmall })}
          >
            <OptionButton
              isSelected={selection.includes(option.value)}
              onClick={() => onOptionClick(option.value)}
              image={option.image}
            >
              {option.label}
            </OptionButton>
          </li>
        ))}
      </ul>
      <div
        className={classNames("navigation-buttons-container", {
          "first-question": isFirstQuestion,
        })}
      >
        {!isFirstQuestion && (
          <NavigationButton to={previousRoute}>back</NavigationButton>
        )}
        <NavigationButton to={nextRoute}>
          {isLastQuestion ? "finish" : "next"}
        </NavigationButton>
      </div>
    </div>
  );
};

export default SurveyQuestion;
