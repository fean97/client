import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

// import ColorPicker from "./components/ColorPicker";
// import Result from "./components/Result";
// import UpFont from "./components/UpFont";
// import Reset from "./components/Reset";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15
    };
  }

  getColor = params => {
    this.setState({
      color: params
    });
  };

  getFontSize = params => {
    this.setState({
      fontSize:
        this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36
          ? this.state.fontSize + params
          : this.state.fontSize
    });
  };

  settingDefault = params => {
    if (params) {
      this.setState({
        color: "red",
        fontSize: 15
      });
    }
  };

  render() {
    return (
      <div className="App">
        {/* <div className="row">
          <div className="col-6">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.getColor}
            />
          </div>
          <div className="col-6">
            <UpFont onfontSize={this.getFontSize} />
            <Reset onSettingDefault={this.settingDefault} />
          </div>

          <div className="col-12 mt-5">
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Form />
            </div>
          </div>
        </div> */}
        <Form/>
      </div>
    );
  }
}

export default App;
