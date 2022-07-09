import { useMemo } from "react";

import { getMatches } from "components/CoffeeMatch/utility";

const Debugger = ({ answers }) => {
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

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid blue",
        backgroundColor: "lightsteelblue",
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
        style={{ padding: "1em" }}
      >
        Restart
      </button>
    </div>
  );
};

export default Debugger;
