import React from 'react';
import logo from './logo.svg';
import LandingPage from './components/pages/Landing';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import Landing from './components/pages/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={LandingPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
