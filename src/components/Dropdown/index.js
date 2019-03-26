import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import avatar from "../../assets/images/avatar.png";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  logOut = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("_id");
    this.props.history.push("/login");
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <Fragment>
        <div className="dropdown">
          <img
            className="button"
            onClick={this.showDropdownMenu}
            // onMouseLeave={this.hideDropdownMenu}
            src={avatar}
            alt="avatar"
          />
          {this.state.displayMenu ? (
            <ul className="menu">
              {" "}
              <li>Profil</li>
              <li onClick={this.logOut}>Déconnexion</li>
            </ul>
          ) : null}
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Dropdown);
