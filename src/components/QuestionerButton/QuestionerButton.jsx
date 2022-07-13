const QuestionerButton = ({
  isFirstQuestion,
  isLastQuestion,
  onBack,
  onNext,
  onFinish,
}) => {
  return (
    <div>
      {!isFirstQuestion && (
        <button className="questioner-button-back" onClick={onBack}>
          Back
        </button>
      )}
      <button
        className="questioner-button-next"
        onClick={isLastQuestion ? onFinish : onNext}
        disabled={isLastQuestion}
      >
        {isLastQuestion ? "Finish " : "Next"}
      </button>
    </div>
  );
};
