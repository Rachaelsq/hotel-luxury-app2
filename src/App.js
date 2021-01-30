import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styling/main.css';

//components
import Navbar from "./components/Navbar"
import Header from "./components/Header"
//pages
import HomePage from "./pages/HomePage"

/* 
============
END IMPORTS
===========
*/

export default function App () {
  return (
      <div>
          <Router>
              <React.Fragment>
                <Header />
                  <Navbar />
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                  </Switch>
              </React.Fragment>
              </Router>
      </div>
  )
}

