// import { useState } from "react";
// import menu from "../assets/menu.png";
// import cancel from "../assets/cancel.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navItems">
        <input type="search" />

        {/* className="nav-links" */}
        <div className="navlinks">
          <ul>
            <li>Categories</li>
            <li>Website Builders</li>
            <li>Today&apos;s deals</li>
          </ul>
        </div>
      </div>
      {/* <div className="hamburger" >
        <img src={!showMenu ? menu : cancel} alt="menu" />
      </div> */}
    </nav>
  );
};

export default Navbar;
