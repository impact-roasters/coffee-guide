import "./QuestionerButton.css";
import { useNavigate } from "react-router-dom";

const QuestionerButton = ({
  isFirstQuestion,
  isLastQuestion,
  nextRoute,
  Finish,
  BackRoute,
  startRoute,
}) => {
  const onNavigate = useNavigate();
  return (
    <div className="questioner-button">
      {!isFirstQuestion && (
        <button
          className="questioner-button-back"
          onClick={() => {
            onNavigate(BackRoute);
          }}
        >
          back
        </button>
      )}
      <button
        className="questioner-button-next"
        onClick={() => {
          onNavigate(nextRoute);
        }}
      >
        {isLastQuestion ? "Finish " : "next"}
      </button>
    </div>
  );
};

export default QuestionerButton;
