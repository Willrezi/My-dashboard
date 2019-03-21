import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import axios from "axios";
import BooksList from "../../components/BooksList";

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
        console.log("Mes livres", response.data[0].books);
        this.setState({ books: response.data[0].books });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="home-container">
          {console.log("this.state.books", this.state.books)}
          <BooksList books={this.state.books} />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
