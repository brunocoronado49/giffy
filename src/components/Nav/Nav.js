import React from "react";
import { Link } from 'wouter';
import Logo from '../../assets/logo.png';
import './nav.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex align-center" to="/">
            <img className="title" src={Logo} alt="logo" width="250"/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="trend"
                to="/trending"
              >
                TRENDING
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
