import React, { Component } from "react";
// imrc tab
// cc tab
class Counter extends Component {
  // React.createElement
  // imrc, cc - shortcuts boilerplate
  // CMD + D = multiple editing
  // <React.Fragment> = avoid duplicate divs
  state = {
    count: 1,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
