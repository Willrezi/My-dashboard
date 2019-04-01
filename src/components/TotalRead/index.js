import React, { Component, Fragment } from "react";
import "./style.css";

class TotalRead extends Component {
  totalPages = () => {
    let total = 0;
    for (let i = 0; i < this.props.books.length; i++) {
      total += this.props.books[i].pages;
    }
    return total;
  };

  render() {
    // console.log("totalRead", this.props.books);
    return (
      <Fragment>
        <div className="read-container">
          <h4>Nombres de livres lus</h4>
          <p>{this.props.books.length}</p>
        </div>
        <div className="read-container">
          <h4>Nombres de pages lus</h4>
          <p>{this.totalPages()}</p>
        </div>
      </Fragment>
    );
  }
}

export default TotalRead;
