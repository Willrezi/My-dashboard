import React, { Component, Fragment } from "react";
import _ from "lodash";

// import "./style.css";

class BarChart extends Component {
  booksByMonths = () => {
    let months = [];
    for (let i = 0; i < this.props.books.length; i++) {
      months.push(this.props.books[i].read);
    }
    console.log("months", months);
    let month = _.groupBy(months);
    console.log("month", month);
  };

  render() {
    return <Fragment>{this.booksByMonths()}</Fragment>;
  }
}

export default BarChart;
