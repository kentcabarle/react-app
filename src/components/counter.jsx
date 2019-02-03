import React, { Component } from "react";
// imrc tab
// cc tab
class Counter extends Component {
  // React.createElement
  // imrc, cc - shortcuts boilerplate
  // CMD + D = multiple editing
  // <React.Fragment> = avoid duplicate divs

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    // this will error
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    this.getBadgeClass();
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        {/* onclick uses handleIncrement NOT handleIncrement() */}
        <button
          // eslint-disable-next-line no-undef
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
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
