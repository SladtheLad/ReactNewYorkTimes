import React, { Component } from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './assets/styles/styles.css';

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
