import React, { Component } from "react";
// imrc tab
// cc tab
class Counter extends Component {
  // React.createElement
  // imrc, cc - shortcuts boilerplate
  // CMD + D = multiple editing
  // <React.Fragment> = avoid duplicate divs

  componentDidUpdate(prevProps, prevState) {
    console.log(`${prevProps.counter.value} -> ${this.props.counter.value}`);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Props counter value has changed!");
    }
  }

  render() {
    console.log("Counter - Rendered");
    // console.log("props", this.props);
    // eslint-disable-next-line no-unused-expressions
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleDelete() {}
}

export default Counter;
