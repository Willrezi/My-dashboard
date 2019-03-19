import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import "./style.css";
import avatar from "../../assets/images/avatar.png";

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
          <img src={avatar} alt="avatar" />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Header);
