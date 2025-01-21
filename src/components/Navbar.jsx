import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {

  const [mode,setMode] = useState(false);

  const handleMode =(e)=>{
    setMode(!mode);
    document.body.classList.remove(...document.body.classList);
    if(!mode)
    {
      document.body.classList.add("bg-dark");
      document.body.classList.add("text-white");
    }
    else{
      document.body.classList.add("bg-light");
      document.body.classList.add("text-dark");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {mode?"Enable Light Mode":"Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
