import { useState, useCallback } from "react";

const numberOfQuestions = 4;

const useSteps = () => {
  const [step, onSetStep] = useState(0);

  const onNextStep = useCallback(() => {
    if (step < numberOfQuestions - 1) {
      onSetStep(step + 1);
    }
  }, [step]);

  const onPreviousStep = useCallback(() => {
    if (step > 0) {
      onSetStep(step + 1);
    }
  }, [step]);

  return {
    step,
    onNextStep,
    onPreviousStep,
  };
};

export default useSteps;
