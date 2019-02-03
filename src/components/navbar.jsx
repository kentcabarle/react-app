import React from "react";

// stateless functional component
// shortcut: sfc

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

/* class NavBar extends Component {
  render() {
    
  }
} */

export default NavBar;
