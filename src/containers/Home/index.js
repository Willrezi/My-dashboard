import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import axios from "axios";

class Home extends Component {
  state = {
    token: Cookies.get("token"),
    username: Cookies.get("username"),
    _id: Cookies.get("_id"),
    books: []
  };

  redirectToSignupPage = () => {
    this.props.history.push("/signup");
  };

  componentDidMount() {
    const { token, _id } = this.state;
    if (!token) {
      this.redirectToSignupPage();
    }
    axios
      .get("http://localhost:3100/api/user/myBooksList/" + _id, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => {
        // console.log(response.data[0].books);
        this.setState({ books: response.data[0].books });
      });
  }

  render() {
    return (
      <Fragment>
        This is the Home component
        <div>{console.log(this.state)}</div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
