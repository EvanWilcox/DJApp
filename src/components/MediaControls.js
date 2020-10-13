import "./MediaControls.css";
import React, { Component } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

class MediaControls extends Component {
  render() {
    return (
      <div className="mediaControls">
        <FaRegPlayCircle />
      </div>
    );
  }
}

export default MediaControls;
