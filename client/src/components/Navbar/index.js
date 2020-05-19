import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link to="/" className={location.pathname === "/" ? "nav-link active navbar-brand" : "nav-link navbar-brand"}>
                    Reading Rainbow
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Search
          </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                    to="/saved"
                    className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >
                    Saved
          </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
