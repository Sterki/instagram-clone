import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderSecond from "./components/HeaderSecond";
import Post from "./components/Posts";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // every single time when the database change snapshot does an automatic refresh giving u the real info in real time
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="app">
      {/* Icon from instagram */}
      <Router>
        <Switch>
          <Route>
            <Header />
            <HeaderSecond />
            {posts.map(({ id, post }) => (
              <Post key={id} post={post} />
            ))}
          </Route>
        </Switch>
      </Router>

      {/* post >>> with a small headersecondary with ur friend historys */}
      {/* sidebar >> with ur suggest and ur avatar icon */}
    </div>
  );
}

export default App;
