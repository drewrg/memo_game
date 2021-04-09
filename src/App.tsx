import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Game from "./Routes/game";
import Menu from "./Routes/menu";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
