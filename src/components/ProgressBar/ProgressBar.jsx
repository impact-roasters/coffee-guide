const ProgressBar = ({ stepIndex, steps }) => (
  <div>
    {stepIndex + 1} / {steps.length}
  </div>
);

export default ProgressBar;
