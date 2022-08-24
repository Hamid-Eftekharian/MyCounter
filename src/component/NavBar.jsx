import React, { Component } from "react";

const NavBar = ({ counters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-primary">
            {counters.filter((c) => c.value !== 0).length}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
