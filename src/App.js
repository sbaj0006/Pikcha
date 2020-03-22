import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
