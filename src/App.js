import React, { Component } from "react";
import "./App.css";

import Circle from "./components/Circle";

import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Circle />
      </div>
    );
  }
}

export default App;
