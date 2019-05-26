import React, { Component } from "react";

class UpFont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 15
    };
  }
  changeSize = params => {
    this.props.onfontSize(params);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeSize(+2)}>Up Font</button>
        <button onClick={() => this.changeSize(-2)}>Down Font</button>
      </div>
    );
  }
}

export default UpFont;
