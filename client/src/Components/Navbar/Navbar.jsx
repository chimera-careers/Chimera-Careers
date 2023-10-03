import React from "react";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-logo-container">
        <img src="\src\assets\Logo.svg" alt="" />
      </div>
      <div className="navbar-options-container">
        <p>Jobs</p>
        <p>Membership</p>
      <div className="navbar-buttons">
       <button>Jobseeker Login</button>
       <button>Post a Job</button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
