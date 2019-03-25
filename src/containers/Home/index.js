import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./style.css";
import axios from "axios";
import BooksList from "../../components/BooksList";
import AddBooks from "../../components/AddBooks";
import Pagination from "../../components/Pagination";

const MAX_ELEMENTS_PER_PAGE = 4;

class Home extends Component {
  state = {
    token: Cookies.get("token"),
    username: Cookies.get("username"),
    _id: Cookies.get("_id"),
    books: [],
    searchParams: {
      skip: 0,
      limit: MAX_ELEMENTS_PER_PAGE
    }
  };

  updateSearchParams = (newSearchParams, callbackFunction) => {
    this.setState(
      {
        searchParams: {
          ...this.state.searchParams, // Je récupère toutes les anciennes valeurs des paramètres de recherche
          ...newSearchParams // J'écrase les anciennes valeurs avec les nouvelles valeurs
        }
      },
      callbackFunction
    );
  };

  redirectToSignupPage = () => {
    this.props.history.push("/signup");
  };

  refreshTask = () => {
    const { token, _id } = this.state;
    if (!token) {
      this.redirectToSignupPage();
    }
    axios
      .get("http://localhost:3100/api/user/myBooksList/" + _id, {
        params: this.state.searchParams,
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => {
        this.setState({ books: response.data[0].books.reverse() });
        console.log("ici", this.state.searchParams);
        console.log("Mes livres", response.data[0].books.length);
      });
  };

  componentDidMount() {
    this.refreshTask();
  }

  render() {
    console.log("this.state.books", this.state.books);

    return (
      <Fragment>
        <div className="home-container">
          <BooksList books={this.state.books} />
          <AddBooks refreshTask={this.refreshTask} />
          <Pagination
            skip={this.state.searchParams.skip}
            updateSearchParams={this.updateSearchParams}
            refreshTask={this.refreshTask}
          />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
