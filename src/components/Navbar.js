import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { db, auth } from "./../firebase";
import { Input, makeStyles, Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../actions/userActions";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [openlogin, setOpenLogin] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const history = useHistory();
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const userloged = useSelector((state) => state.user.userloged);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeSesion = () => {
    auth.signOut();
  };
  const SignIn = (e) => {
    // here the fancy code to login
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("login Successfully", authUser.user.displayName);

        history.push("/");
        setOpenLogin(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signUp = (e) => {
    e.preventDefault();
    // here the fancy code to do a login with firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center className="center__login">
              <img
                className="app__logoinstagram"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              />
            </center>
            <div className="app__formular">
              <Input
                name="name"
                type="text"
                value={name}
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button type="submit" onClick={signUp}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        open={openlogin}
        onClose={() => {
          setOpenLogin(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <center className="center__login">
              <img
                className="app__logoinstagram"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              />
            </center>
            <div className="app__formular">
              <Input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button onClick={SignIn}>Sign In</Button>
            </div>
          </form>
        </div>
      </Modal>
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
        <Link className="navbar__links">
          <Avatar
            onClick={handleClick}
            style={{ width: "1.8rem", height: "1.8rem" }}
            className="avatar__navbar"
            alt={userloged?.displayName}
            src="/static/images/avatar/1.jpg"
          />
        </Link>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {userloged ? (
            <>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My Account</MenuItem>

              <MenuItem onClick={() => closeSesion()}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => setOpenLogin(true)}>Sign In</MenuItem>
              <MenuItem onClick={() => setOpen(true)}>Sign Up</MenuItem>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
