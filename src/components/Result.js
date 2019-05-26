import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div>
        <p>
          Color: {this.props.color} - Fontsize : {this.props.fontSize}
        </p>
        <div
          id="content"
          style={{ color: this.props.color, fontSize: this.props.fontSize }}
        >
          Nội dung setting
        </div>
      </div>
    );
  }
}

export default Result;
