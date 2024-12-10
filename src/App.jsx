// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import LandingScreen from './components/LandingScreen';
import FeaturePage from './components/FeaturePage';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/logout" element={
            <div className="logout-page">
              <h1>Logged Out</h1>
              <p>Thank you for using Legal Tech. See you soon!</p>
              <button onClick={handleLogout}>Back to Login</button>
            </div>
          } />
          <Route path="/:feature" element={isLogged ? <FeaturePage /> : <Login onLogin={handleLogin} />} />
          <Route path="/" element={isLogged ? <LandingScreen /> : <Login onLogin={handleLogin} />} />
        </Routes>
        <ChatWindow />
        <Footer />
      </div>
    </Router>
  );
};

export default App;