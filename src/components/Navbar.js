import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar__links" to="/">
        <HomeIcon style={{ width: "1.8rem", height: "1.8rem" }} />
      </Link>
      <Link className="navbar__links" to="/">
        <TelegramIcon style={{ width: "1.8rem", height: "1.8rem" }} />
      </Link>
      <Link className="navbar__links" to="/">
        <ExploreIcon style={{ width: "1.8rem", height: "1.8rem" }} />
      </Link>
      <Link className="navbar__links" to="/">
        <FavoriteBorderIcon style={{ width: "1.8rem", height: "1.8rem" }} />
      </Link>
      <Link className="navbar__links" to="/">
        <Avatar
          style={{ width: "1.8rem", height: "1.8rem" }}
          alt="Alex Rodriguez"
          src="/static/images/avatar/1.jpg"
        />
      </Link>
    </div>
  );
}

export default Navbar;
