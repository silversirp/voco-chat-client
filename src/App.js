import React, { useState } from 'react';
import logo from './VOCO-Logo.svg';
import Chat from './Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <div>
          <Chat />
        </div>
      </header>
    </div>
  );
}

export default App;
