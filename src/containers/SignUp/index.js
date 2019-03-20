import React, { Component, Fragment } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import swal from "sweetalert";

import "./style.css";
import sign from "../../assets/images/sign.png";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    confirmedPassword: "",
    errorMessage: ""
  };

  onSubmit = event => {
    const { email, username, password, confirmedPassword } = this.state;
    if (email === "") {
      swal({
        title: "Veuillez saisir votre Email",
        icon: "warning",
        dangerMode: true
      });
    } else if (username === "") {
      swal({
        title: "Veuillez saisir votre Pseudo",
        icon: "warning",
        dangerMode: true
      });
    } else if (password === "") {
      swal({
        title: "Veuillez saisir votre mot de passe",
        icon: "warning",
        dangerMode: true
      });
    } else if (confirmedPassword === "") {
      swal({
        title: "Veuillez confirmer votre mot de passe",
        icon: "warning",
        dangerMode: true
      });
    }
    if (password !== confirmedPassword) {
      this.setState({
        errorMessage: "Les mots de passe ne sont pas identiques"
      });
    } else {
      axios
        .post("http://localhost:3100/api/user/sign_up", {
          email: email,
          username: username,
          password: password
        })
        .then(response => {
          console.log(response.data);
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

  renderError() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Fragment>
        <div className="signup-container">
          <div className="signup-image">
            <img src={sign} alt="" />
          </div>
          <div className="signup-content">
            <h1>Bienvenue sur votre Dashboard</h1>
            <h2>Créer un compte</h2>
            <form onSubmit={this.onSubmit}>
              <div className="signup-input">
                <label>Adresse email</label>
                <input
                  type="email"
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                  value={this.state.email || ""}
                />
              </div>
              <div className="signup-input">
                <label>Pseudo</label>
                <input
                  type="text"
                  onChange={event => {
                    this.setState({ username: event.target.value });
                  }}
                  value={this.state.username || ""}
                />
              </div>
              <div className="signup-password">
                <div className="password-left">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={event => {
                      this.setState({ password: event.target.value });
                    }}
                    value={this.state.password}
                  />
                </div>
                <div className="password-right">
                  <label htmlFor="password">Confirmer le mot de passe</label>
                  <input
                    id="confirmedPassword"
                    name="confirmedPassword"
                    type="password"
                    onChange={event => {
                      this.setState({ confirmedPassword: event.target.value });
                    }}
                    value={this.state.confirmedPassword}
                  />
                </div>
              </div>
              <div className="error-message">{this.renderError()}</div>
              <button className="signup-button" type="submit">
                Inscription
              </button>
            </form>
            <div className="signup-text">
              <p className="text-1">Vous avez déjà un compte ?</p>
              <p
                className="text-2"
                onClick={() => this.props.history.push("/login")}
              >
                Connectez-vous
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
