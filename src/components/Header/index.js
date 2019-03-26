import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import "./style.css";
import Dropdown from "../Dropdown";

class Header extends Component {
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
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
