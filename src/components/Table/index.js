import React, { Component, Fragment } from "react";
import "./style.css";

class Table extends Component {
  render() {
    return (
      <Fragment>
        <table>
          {/* <thead>
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
          </thead> */}
          <tbody>
            <tr>
              <td>{this.props.title}</td>
              <td>{this.props.author}</td>
              <td>{this.props.editor}</td>
              <td>{this.props.country}</td>
              <td>{this.props.genre}</td>
              <td>{this.props.pages}</td>
              <td>{this.props.note}</td>
              <td>{this.props.read}</td>
            </tr>
          </tbody>
        </table>
        <div> </div>
      </Fragment>
    );
  }
}

export default Table;
