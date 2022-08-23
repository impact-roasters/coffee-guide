import "./QuestionerButton.css";
import { useNavigate } from "react-router-dom";

const QuestionerButton = ({
  isFirstQuestion,
  isLastQuestion,
  nextRoute,
  backRoute,
}) => {
  const onNavigate = useNavigate();
  return (
    <div className="questioner-button">
      {!isFirstQuestion && (
        <button
          className="back"
          onClick={() => {
            onNavigate(backRoute);
          }}
        >
          back
        </button>
      )}

      <button
        className="next"
        onClick={() => {
          onNavigate(nextRoute);
        }}
      >
        {isLastQuestion ? "finish " : "next"}
      </button>
    </div>
  );
};

export default QuestionerButton;
