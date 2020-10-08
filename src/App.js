import './assets/css/App.css';
import React, { Component } from 'react';
import MediaControls from "./components/MediaControls"
import SideBar from "./components/SideBar"

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
