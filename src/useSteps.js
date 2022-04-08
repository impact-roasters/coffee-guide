import { useState } from "react";

const numberOfQuestions = 4;

const useSteps = () => {
  const [step, onSetStep] = useState(0);

  return {
    step,
    onSetStep,
    numberOfQuestions,
  };
};

export default useSteps;
