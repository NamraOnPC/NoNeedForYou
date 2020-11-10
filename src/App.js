import React from 'react';
import Header from './Header';
import Cards from './Cards';
import SwipeButtons from './SwipeButtons';
import Delete from './Delete';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/delete">
            <Header backButton='/' />
            <h1>I am the delete page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
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
