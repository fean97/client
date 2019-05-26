import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "blue", "green", "#ccc"]
    };
  }

  changeColor = color => {
    this.props.onReceiveColor(color);
  };

  render() {
    const hehe = this.state.colors.map((color, index) => {
      return (
        <div className="col-3" key={index}>
          <span
            className={this.props.color === color ? "active" : ""}
            style={{ backgroundColor: color }}
            onClick={() => this.changeColor(color)}
          />
        </div>
      );
    });

    return (
      <div className="color-pick">
        <div className="row">{hehe}</div>
      </div>
    );
  }
}

export default ColorPicker;
