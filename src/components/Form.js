import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      // rdLang: "en"
    };
  }

  SubmitAll = e => {
    e.preventDefault();
    console.log(this.state);
  };

  changeHandle = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      // <form onSubmit={this.SubmitAll}>
      //   <div className="form-group">
      //     <label>Username</label>
      //     <input
      //       type="text"
      //       name="txtUsername"
      //       className="form-control"
      //       placeholder="Enter username"
      //       onChange={this.changeHandle}
      //       value={this.state.txtUsername}
      //     />
      //   </div>
      //   <div className="form-group">
      //     <label>Password</label>
      //     <input
      //       type="password"
      //       name="txtPassword"
      //       className="form-control"
      //       placeholder="Password"
      //       onChange={this.changeHandle}
      //       value={this.state.txtPassword}
      //     />
      //   </div>
      //   <div className="radio">
      //     <label>
      //       <input
      //         type="radio"
      //         name="rdLang"
      //         value="vi"
      //         onChange={this.changeHandle}
      //         checked={this.state.rdLang === "vi"}
      //       />
      //       Tiếng Việt
      //     </label>
      //     <br />
      //     <label>
      //       <input
      //         type="radio"
      //         name="rdLang"
      //         value="en"
      //         onChange={this.changeHandle}
      //         checked={this.state.rdLang === "en"}
      //       />
      //       Tiếng Anh
      //     </label>
      //   </div>
      //   <button type="submit" className="btn btn-primary">
      //     Submit
      //   </button>
      //   <button type="reset" className="btn btn-primary">
      //     Reset
      //   </button>
      // </form>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form
              onSubmit={this.SubmitAll}
              className="login100-form validate-form"
            >
              <span className="login100-form-title p-b-26">Welcome</span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font" />
              </span>
              <div className="wrap-input100 validate-input">
                <input
                  type="text"
                  name="txtUsername"
                  onChange={this.changeHandle}
                  value={this.state.txtUsername}
                  className="input100"
                />
                <span className="focus-input100" data-placeholder="Username" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  type="password"
                  name="txtPassword"
                  onChange={this.changeHandle}
                  value={this.state.txtPassword}
                  className="input100"
                />
                <span className="focus-input100" data-placeholder="Password" />
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn" type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
