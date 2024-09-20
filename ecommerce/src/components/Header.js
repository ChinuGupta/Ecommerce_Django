import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <div>
        <Navbar
          className="navbar navbar-expand-lg bg-black"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <LinkContainer to="/">
              <Nav.Link className="navbar-brand">Ecom</Nav.Link>
            </LinkContainer>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5" id="navbarColor01">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                  <LinkContainer to="/">
                    <Nav.Link className="nav-link active">Home</Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
              <form className="d-flex ">
                <input
                  className="form-control me-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  className="btn btn-info my-2 my-sm-0 "
                  type="submit"
                  fdprocessedid="i0ad2l"
                >
                  Search
                </button>
              </form>
              {/* {/* <li className="nav-item ">
                  <a className="nav-link active" href="/">
                    Cart{" "}
                  </a>
                </li> */}

              <li className="nav-item dropdown mx-4 list-unstyled">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  New User?
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Login
                  </a>
                  <a className="dropdown-item" href="/">
                    Sign up
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </div>
              </li>

              <li className="nav-item list-unstyled mx-5">
                <LinkContainer to="/cart">
                    <Nav.Link className="nav-link active">Cart</Nav.Link>
                  </LinkContainer>
              </li>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
