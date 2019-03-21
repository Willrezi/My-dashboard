import React, { Component } from "react";
import Table from "../Table";
/* import "./style.css"; */

class BooksList extends Component {
  render() {
    let bookList = [];
    for (let i = 0; i < this.props.books.length; i++) {
      console.log("this.props.books", this.props.books);

      bookList.push(
        <Table
          key={i}
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

    console.log("booklist", bookList);
    return (
      <div className="booklist-container">
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Editeur</th>
              <th>Pays</th>
              <th>Genre</th>
              <th>Nb Pages</th>
              <th>Note</th>
              <th>Lu en</th>
            </tr>
          </thead>
        </table>
        {bookList}
      </div>
    );
  }
}

export default BooksList;
