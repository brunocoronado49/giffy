import React from "react";
import { Link } from 'wouter';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex" to="/">
            <h1>Giffy</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
