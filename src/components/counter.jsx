import React, { Component } from "react";
// imrc tab
// cc tab
class Counter extends Component {
  // React.createElement
  // imrc, cc - shortcuts boilerplate
  // CMD + D = multiple editing
  // <React.Fragment> = avoid duplicate divs

  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    // eslint-disable-next-line no-unused-expressions
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleDelete() {}
}

export default Counter;
