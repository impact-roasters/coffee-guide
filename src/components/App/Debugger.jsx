import { useState, useMemo } from "react";

import { getMatches } from "components/CoffeeMatch/utility";

const Debugger = ({ answers }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { profile, acidity, characteristics, roastLevel } = answers;

  const matches = useMemo(
    () =>
      getMatches({
        profile,
        acidity,
        characteristics,
        roastLevel,
      }),
    [acidity, characteristics, profile, roastLevel]
  );

  if (!isVisible) {
    return (
      <button
        style={{
          padding: "0.5em",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Show debugger ↗
      </button>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        borderTop: "1px solid blue",
        backgroundColor: "lightsteelblue",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <b>Profile:</b> {profile ?? "?"}
      <br />
      <b>Acidity:</b> {acidity ?? "?"}
      <br />
      <b>Characteristics:</b>{" "}
      {characteristics.length > 0 ? characteristics.join("/") : "?"}
      <br />
      <b>Roast level:</b> {roastLevel ?? "?"}
      <hr style={{ marginBlock: "20px" }} />
      <b>Possible matches:</b> {matches.map((item) => item.name).join(", ")}
      <hr style={{ marginBlock: "20px" }} />
      <button
        onClick={() => {
          localStorage.removeItem("profile");
          localStorage.removeItem("acidity");
          localStorage.removeItem("characteristics");
          localStorage.removeItem("roastLevel");
          setTimeout(() => {
            window.location.replace(process.env.PUBLIC_URL);
          }, 500);
        }}
        style={{ padding: "0.5em" }}
      >
        Restart
      </button>
      <button
        style={{ padding: "0.5em" }}
        onClick={() => {
          setIsVisible(false);
        }}
      >
        ↙ Hide debugger
      </button>
    </div>
  );
};

export default Debugger;
