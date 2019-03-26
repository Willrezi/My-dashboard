import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import avatar from "../../assets/images/avatar.png";
import Dropdown from "../Dropdown";

class Header extends Component {
  //   logOut = () => {
  //     Cookies.remove("token");
  //     Cookies.remove("username");
  //     Cookies.remove("_id");
  //     this.props.history.push("/signup");
  //   };

  render() {
    return (
      <Fragment>
        <div className="header-container">
          <h2
            className="header-title"
            onClick={() => this.props.history.push("/home")}
          >
            Mon dashboard
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Dropdown />
          </div>
          {/* <img src={avatar} alt="avatar" onClick={this.logOut} /> */}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
