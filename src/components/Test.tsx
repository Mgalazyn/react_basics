import { useState } from "react";
import produce from "immer";

function Test() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", isFixed: false },
    { id: 2, title: "bug2", isFixed: false },
    { id: 3, title: "bug3", isFixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) {
          bug.isFixed = !bug.isFixed;
        }
      })
    );
  };
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.isFixed ? "Fixed" : "New"}{" "}
        </p>
      ))}
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default Test;
