import React, { Profiler, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderSecond from "./components/HeaderSecond";
import Post from "./components/Posts";
import { db, auth } from "./firebase";
import { Button, Input, makeStyles, Modal } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import store from "./store";
import { Provider, useDispatch } from "react-redux";
import { getUserAction, setUserNull } from "./actions/userActions";
import ImageUpload from "./components/ImageUpload";

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

function wrapApp() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route>
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user has login
        dispatch(getUserAction(authUser));
        setUser(authUser);
      } else {
        // the user has logout
        setUser(null);
        dispatch(setUserNull());
      }
    });
  }, [user, name]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  console.log(posts);
  return (
    <div className="app">
      {/* Icon from instagram */}
      <Provider store={store}>
        <Router>
          <Switch>
            <Route>
              <Header />
              <ImageUpload />
              <HeaderSecond />
              {posts.map(({ id, post }) => (
                <Post key={id} post={post} />
              ))}
            </Route>
          </Switch>
        </Router>
      </Provider>
      {/* post >>> with a small headersecondary with ur friend historys */}
      {/* sidebar >> with ur suggest and ur avatar icon */}
    </div>
  );
}

export default wrapApp;
