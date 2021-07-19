import React from "react";
import ReactDOM from "react-dom";
//import Demo from "./demo";
import Hello from "./hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="code sandbox" />
    <h2>Hello from code sandbox</h2>
  </div>
);
ReactDOM.render(<App />, document.querySelector("#root"));
