import React from 'react';
import logo from './logo.svg';
import LandingPage from './components/pages/Landing';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route path="/" exact component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
