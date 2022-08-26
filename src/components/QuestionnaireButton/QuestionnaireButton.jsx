import "./QuestionnaireButton.css";
import { useNavigate } from "react-router-dom";

const QuestionnaireButton = ({ children, to }) => {
  const onNavigate = useNavigate();
  return (
    <button
      className="questionnaire-button"
      onClick={() => {
        onNavigate(to);
      }}
    >
      {children}
    </button>
  );
};

export default QuestionnaireButton;
