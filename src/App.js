import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderSecond from "./components/HeaderSecond";
import Post from "./components/Posts";
import { Avatar } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      {/* Icon from instagram */}
      <Router>
        <Switch>
          <Route>
            <Header />
            <HeaderSecond />
            <Post
              userName="alexbyrod_7"
              imageUrl="https://hotbook.com.mx/wp-content/uploads/2019/04/hotbook-se-revela-la-primera-imagen-de-un-agujero-negro-portada.jpg"
              likes={110}
              message="Hi im testing a message in instagram clone"
              comments="Hi this is a comment"
            />
            <Post
              userName="alexbyrod_7"
              imageUrl="https://carlofarucci.com/wp-content/uploads/2018/09/seo-para-imagenes-2019.jpg"
              likes={200}
              message="Hi im testing a message in instagram clone"
              comments="Hi this is a comment"
            />
            <Post
              userName="alexbyrod_7"
              imageUrl="https://www.batiburrillo.net/wp-content/uploads/2019/07/Ampliacio%CC%81n-de-imagen-en-li%CC%81nea-sin-perder-calidad.jpg"
              likes={130}
              message="Hi im testing a message in instagram clone"
              comments="Hi this is a comment"
            />
          </Route>
        </Switch>
      </Router>

      {/* post >>> with a small headersecondary with ur friend historys */}
      {/* sidebar >> with ur suggest and ur avatar icon */}
    </div>
  );
}

export default App;
