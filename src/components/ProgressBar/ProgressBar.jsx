import "./ProgressBar.css";

const ProgressBar = ({ stepIndex, steps }) => (
  <div className="progress-steps-wrapper">
    <div className="progress-steps">
      {steps.map((step) => (
        <div key={step.route} className="progress-step">
          {step.title}
        </div>
      ))}
    </div>
    <div className="progress-bar">
      <div
        className="progress-bar-indicator"
        style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
