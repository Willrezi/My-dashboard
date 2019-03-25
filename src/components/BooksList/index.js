import React, { Component } from "react";
import Table from "../Table";
import "./style.css";

class BooksList extends Component {
  render() {
    let bookList = [];
    for (let i = 0; i < this.props.books.length; i++) {
      //   console.log("this.props.books", this.props.books);

      bookList.push(
        <Table
          key={i}
          id={this.props.books[i]._id}
          title={this.props.books[i].title}
          author={this.props.books[i].author}
          editor={this.props.books[i].editor}
          country={this.props.books[i].country}
          genre={this.props.books[i].genre}
          pages={this.props.books[i].pages}
          note={this.props.books[i].note}
          read={this.props.books[i].read}
        />
      );
    }

    // console.log("booklist", bookList.length);
    return (
      <div className="booklist-container ">
        {/* <div> */}
        <table>
          <thead>
            <tr className="header-style">
              <th className="large-width">Titre</th>
              <th className="medium-width">Auteur</th>
              <th className="medium-width">Editeur</th>
              <th className="normal-width">Pays</th>
              <th className="normal-width">Genre</th>
              <th className="normal-width">Nb Pages</th>
              <th className="small-width">Note</th>
              <th className="small-width">Lu en</th>
            </tr>
          </thead>
          {bookList}
        </table>
        {/* </div> */}
      </div>
    );
  }
}

export default BooksList;
