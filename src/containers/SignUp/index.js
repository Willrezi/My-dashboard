import React, { Component, Fragment } from "react";

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
            <form>
              <div className="signup-input">
                <label>Adresse email</label>
                <input type="email" />
              </div>
              <div className="signup-input">
                <label>Pseudo</label>
                <input type="text" />
              </div>
              <div className="signup-password">
                <div className="password-left">
                  <label htmlFor="password">Mot de passe</label>
                  <input id="password" name="password" type="password" />
                </div>
                <div className="password-right">
                  <label htmlFor="password">Confirmer le mot de passe</label>
                  <input id="password" name="password" type="password" />
                </div>
              </div>
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
