import React, { Component, Fragment } from "react";

import "./style.css";
import sign from "../../assets/images/sign.png";

class LogIn extends Component {
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
            <form>
              <div className="login-input">
                <label>Email ou Pseudo</label>
                <input type="text" />
              </div>
              <div className="login-password">
                <label htmlFor="password">Mot de passe</label>
                <input id="password" name="password" type="password" />
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
