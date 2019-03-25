import React, { Component } from "react";
/* import "./style.css"; */

class Pagination extends Component {
  getPreviousPage = () => {
    if (this.props.skip > 0) {
      this.props.updateSearchParams(
        {
          skip: this.props.skip - 4
        },
        this.props.refreshTask
      );
    }
  };

  getNextPage = () => {
    this.props.updateSearchParams(
      {
        skip: this.props.skip + 4
      },
      this.props.refreshTask
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getPreviousPage}>Précédente</button>
        <button onClick={this.getNextPage}>Page suivante</button>
      </div>
    );
  }
}

export default Pagination;
