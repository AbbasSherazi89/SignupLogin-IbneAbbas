import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="rounded-5 border"
              src="assets/logo-signup.jfif"
              alt=""
              height={70}
            />
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              <Link
                className="nav-item nav-link fw-bold text-white  rounded-3 border ms-3 mt-2"
                to="/signup"
              >
                Signup
              </Link>
              <Link
                className="nav-item nav-link fw-bold text-white rounded-3 border ms-3 mt-2"
                to="/"
              >
                Login
              </Link>
              <Link
                className="nav-item nav-link fw-bold text-white rounded-3 border ms-3 mt-2"
                to="/validation2"
              >
                Form Validation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
