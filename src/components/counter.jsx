import React, { Component } from "react";
// imrc tab
// cc tab
class Counter extends Component {
  // React.createElement
  // imrc, cc - shortcuts boilerplate
  // CMD + D = multiple editing
  // <React.Fragment> = avoid duplicate divs

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement() {
    // this will error
    console.log("Increment clicked.", this);
  }

  render() {
    this.getBadgeClass();
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        {/* onclick uses handleIncrement NOT handleIncrement() */}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
