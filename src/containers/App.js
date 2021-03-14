import React from 'react';
import './App.css';
import logo from '../logo.svg';
import Header from '../components/Header/Header';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
