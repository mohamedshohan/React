import React from "react";
import { NavLink } from "react-router-dom";



function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Wallet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/balance"
                  >
                    Balance
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/getCustomers"
                  >
                    Customers
                  </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Register.html">Register</a>
              </li>
              <li className="nav-item">
              <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Action Links
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Fund Transfer</a></li>
                  <li><a className="dropdown-item" href="#">deposit</a></li>
                  <li><a className="dropdown-item" href="#">withdraw</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ms-auto">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
        </div>
      </nav>

    )
}
export default Navbar;