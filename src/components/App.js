import "./App.css";
import React, { Component } from "react";
import MediaControls from "./MediaControls";
import SideBar from "./SideBar";

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <MediaControls />
      </div>
    );
  }
}

export default App;
