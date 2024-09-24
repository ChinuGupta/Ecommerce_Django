import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./../x.css";
function Header() {
  const location = useLocation();
  return (
    <>
      <div>
        <Navbar
          className="navbar navbar-expand-lg bg-light"
          data-bs-theme="light"
        >
          <div className="container-fluid">
            <LinkContainer to="/">
              <Nav.Link className="navbar-brand mx-4">
                <img src="./img2.png" alt="" style={{ width: "120px" }} />
              </Nav.Link>
            </LinkContainer>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor03"
              aria-controls="navbarColor03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav me-auto mx-3">
                <li className="nav-item ">
                  <LinkContainer to="/">
                    <Nav.Link className="nav-link active fw-bold">
                      Home
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li className="nav-item mx-2">
                  <LinkContainer to="/about">
                    <Nav.Link className="nav-link fw-bold">About</Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
              <div className="Search">
                <form className="d-flex border border-grey mx-3">
                  <input
                    className="form-control me-sm-2 border border-white search-button"
                    type="search"
                    placeholder="Search"
                    style={{ borderRadius: "2px" }}
                  />
                  <button
                    className="btn btn-white my-2 my-sm-0  border border-white"
                    type="submit"
                    fdprocessedid="enmdv9"
                    style={{ borderRadius: "2px" }}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <li className="nav-item dropdown list-unstyled mx-2 justify-content-center">
                <LinkContainer to="/signup">
                  <Nav.Link
                    className="nav-link dropdown-toggle fw-bold"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    New User?
                  </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu ">
                  <LinkContainer to="/login">
                    <Nav.Link className="dropdown-item custom-link">
                      Login
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link className="dropdown-item custom-link">
                      Signup
                    </Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-divider"></div>
                  <LinkContainer to="/logout">
                    <Nav.Link className="dropdown-item custom-link ">
                      Logout
                    </Nav.Link>
                  </LinkContainer>
                </div>
              </li>

              <li className="nav-item mx-4 list-unstyled">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link">
                    <img src="./bag.png" alt="" style={{ width: "30px" }} />
                  </Nav.Link>
                </LinkContainer>
              </li>
            </div>
          </div>
        </Navbar>
        {location.pathname === "/" && (
          <header>
            <img
              className="header-img"
              src="https://team90degree.com/html/tf/bestshop-new-demo/bestshop-demo/img/slider/slide2.jpg"
              alt=""
            />
            <div className="header-text">
              {" "}
              <h1
                style={{
                  position: "absolute",
                  top:250,
                  left: 120,
                  zIndex: 1,
                  fontSize: "2.7rem",
                }}
              >
                <b style={{ color: "#00CB99" }}> Discover </b> Your New Favorite
                Brands
              </h1>
              <button
                style={{
                  position: "absolute",
                  top:350,
                  left: 120,
                  zIndex: 1,
                  fontSize: "1.5rem",
                  backgroundColor:" #00cb99 ",
                  padding:"5px",
                  border:"none",
                  borderRadius:"4px",
                }}
              >
                <h5>Go To Products</h5>
              </button>
            </div>
          </header>
        )}
      </div>
    </>
  );
}

export default Header;
