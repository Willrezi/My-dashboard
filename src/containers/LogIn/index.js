import React, { Component, Fragment } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import swal from "sweetalert";

import "./style.css";
import sign from "../../assets/images/sign.png";

class LogIn extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    const { username, password } = this.state;
    if (username === "") {
      swal({
        title: "Veuillez saisir Pseudo",
        icon: "warning",
        dangerMode: true
      });
    } else if (password === "") {
      swal({
        title: "Veuillez saisir votre mot de passe",
        icon: "warning",
        dangerMode: true
      });
    } else {
      axios
        .post("http://localhost:3100/api/user/log_in", {
          username: username,
          password: password
        })
        .then(response => {
          //   console.log(response.data);
          if (response.data.token) {
            Cookies.set("token", response.data.token);
            Cookies.set("username", response.data.username);
            Cookies.set("_id", response.data._id);
          }
          this.props.history.push("/home");
        })
        .catch(error => {
          console.log(error.message);
        });
    }
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="login-container">
          <div>
            <img src={sign} alt="" />
          </div>
          <div className="login-content">
            <h1>Bienvenue sur votre Dashboard</h1>
            <h2>Connexion</h2>
            <form onSubmit={this.onSubmit}>
              <div className="login-input">
                <label>Pseudo</label>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>
              <div className="login-password">
                <label htmlFor="password">Mot de passe</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.value}
                />
              </div>
              <button className="signup-button" type="submit">
                Connexion
              </button>
            </form>
            <div className="login-text">
              <p className="text-1">Pas encore de compte ?</p>
              <p
                className="text-2"
                onClick={() => this.props.history.push("/signup")}
              >
                Inscrivez-vous
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LogIn;
