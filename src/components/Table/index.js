import React, { Component, Fragment } from "react";
import "./style.css";

class Table extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <Fragment>
        <tbody>
          <tr className="row-style">
            <td className="large-width">{this.props.title}</td>
            <td className="medium-width">{this.props.author}</td>
            <td className="medium-width">{this.props.editor}</td>
            <td className="normal-width">{this.props.country}</td>
            <td className="normal-width">{this.props.genre}</td>
            <td className="normal-width center">{this.props.pages}</td>
            <td className="small-width center">{this.props.note}</td>
            <td className="small-width">{this.props.read}</td>
          </tr>
        </tbody>
      </Fragment>
    );
  }
}

export default Table;
