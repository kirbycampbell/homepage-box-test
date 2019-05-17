import React, { useState, useEffect } from "react";
import "./App.css";
import useInterval from "./useInterval";

function App() {
  const [transition, setTransition] = useState(false);
  const [boxMove, setBoxMove] = useState(false);
  useEffect(() => {
    setBoxMove(!boxMove);
  }, [transition]);
  useInterval(() => {
    setTransition(!transition);
  }, 4000);

  return (
    <div className="App">
      <div className={"header " + (transition ? "finish" : "start")}>Hello</div>
      <div className="content-box">
        <div className="outerBox ">
          <div className={"innerBox " + (boxMove ? "Lbox-start" : "Lbox-fin")}>
            Left Box
          </div>
          <div className={"innerBox " + (boxMove ? "Rbox-start" : "Rbox-fin")}>
            Right Box
          </div>
        </div>
      </div>
      <div className={"footer " + (transition ? "foot-fin" : "foot-start")}>
        Footer
      </div>
    </div>
  );
}

export default App;
