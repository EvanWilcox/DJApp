import "./SideBar.css";
import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <a href="#">Home</a>
        <a href="#">Settings</a>
        <h2>Playlist</h2>
        <a href="#">Playlist 1</a>
        <a href="#">Playlist 2</a>
      </div>
    );
  }
}

export default SideBar;
