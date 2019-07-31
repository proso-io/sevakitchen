import React from 'react';
import logo from './logo.svg';
import LandingPage from './components/pages/Landing';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';
import Landing from './components/pages/Landing';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
