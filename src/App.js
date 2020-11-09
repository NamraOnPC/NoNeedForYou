import React from 'react';
import Header from './Header';
import Cards from './Cards';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/chat">
              <h1>I am the chatpage</h1>
            </Route>
            <Route path="/">
              <Cards/>
            </Route>
          </Switch>
        </Router>
        {/* Cards */}
        {/* Buttons below cards*/}
        {/* Deleted Contacts Screen */}
        {/* Individual Contacts Screen */}
    </div>
  );
}

export default App;
