import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <div className="header__iconcontainer">
          <input type="text" placeholder="search..." />
          <SearchIcon className="header__icon" />
        </div>

        <Navbar />
      </div>
      {/* header, logo, a search and a navbar with icons */}
    </div>
  );
}

export default Header;
