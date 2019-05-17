import React, { useState } from "react";
import "./App.css";
import useInterval from "./useInterval";

function App() {
  const [transition, setTransition] = useState(false);

  return (
    <div className="App">
      <div className={"header " + (transition ? "finish" : "start")}>Hello</div>
      <div className="content-box">
        <button onClick={() => setTransition(!transition)}>
          Click to set Transition as opposite
        </button>
      </div>
      <div className="footer">
        <div className="innerFooter">Footer</div>
      </div>
    </div>
  );
}

export default App;
