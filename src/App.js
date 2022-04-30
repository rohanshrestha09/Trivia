import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Question from "./Question";
import Ans from "./Ans";
import dbase from "./db.js";
import Count from "./Count";
import Solve from "./Solve";

const App = () => {
  const [index, setIndex] = useState(0);
  const [pts, setPts] = useState(0);
  const [styleChangeTrue, setStyleChangeTrue] = useState("initial");
  const [styleChangeFalse, setStyleChangeFalse] = useState("initial");
  const [pointer, setPointer] = useState("initial");
  const pointsChange = "green";

  const colCg = () => {
    setStyleChangeTrue("initial");
    setStyleChangeFalse("initial");
  };

  const changeQuestion = () => {
    setIndex((val) => val + 1);
    setPointer("initial");
    colCg();
  };

  const pointsUpdate = () => {
    setPts((val) => val + 5);
  };

  const colorUpdate = () => {
    setPointer("none");
    setStyleChangeTrue("#6ECE53");
    setStyleChangeFalse("#F35F5D");
  };

  const restart = () => {
    setIndex(0);
    setPts(0);
    colCg();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          {" "}
          {index < 15 ? (
            <Nav
              onclick={changeQuestion}
              index={index}
              pts={pts}
              restart={restart}
            />
          ) : (
            restart()
          )}{" "}
          <Question index={index} database={dbase} />
          <Ans
            index={index}
            database={dbase}
            pointsUpdate={pointsUpdate}
            styleChangeTrue={styleChangeTrue}
            styleChangeFalse={styleChangeFalse}
            colorUpdate={colorUpdate}
            pointer={pointer}
          />{" "}
        </div>{" "}
        <div className="col-lg-3">
          <Count pointsChange={pointsChange} index={index} />
          <Solve colorUpdate={colorUpdate} setPointer={setPointer} />
        </div>
      </div>
    </div>
  );
};

export default App;
