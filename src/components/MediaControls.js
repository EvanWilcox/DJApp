import "../assets/css/MediaControls.css"
import React, { Component } from 'react';
import { FaRegPlayCircle } from "react-icons/fa"

class MediaControls extends Component {
  render() {
    return (
      <div className="mediaControls" > 
        <FaRegPlayCircle />
      </div>
    );
  }
}

// const MediaControlsStyle = {
//     position: "fixed",
//     bottom: "0",
//     left: "0",
//     width: "100%",
//     height: "86px",
//     backgroundColor: "#212121",
//     color: "white",
//     textAlign: "center"
// }

export default MediaControls;
